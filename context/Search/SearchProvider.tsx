import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { parseCookies, setCookie } from 'nookies'

import SearchContext from "./SearchContext"
import { PropsChildren } from "types/types"


const SearchProvider = ({ children }: PropsChildren) => {
  const ref = useRef<NodeJS.Timeout>()
  const textRef = useRef<HTMLInputElement>("")
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const router = useRouter()

  const cookies = parseCookies()
  const queryCookie = cookies.query

  const handleSearch = () => {
    if (textRef.current.value !== "") {
      if (ref.current) {
        clearTimeout(ref.current)
      }

      ref.current = setTimeout(() => {
        const queryValue = textRef.current.value
        setCookie(null, 'query', queryValue)
        setPage(1)

      }, 1000)
    }
  }

  const fetchMore = () => {
    if (search[search.length - 1].length - 2) {
      setTimeout(() => {
        setPage((prev) => prev + 1)
      }, 1000)
    }
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&query=${queryCookie}`, {
      params: {
        page: page
      }
    })
      .then(res => {
        if (queryCookie !== "" || res.data.results !== []) {
          if (page > 1) {
            setSearch(prev => Array.from(new Set([...prev, res.data.results])))
          } else {
            setSearch([res.data.results])
          }
          router.push(`/search?q=${queryCookie}`)
        }
      })
      .catch(err => console.log(err))
  }, [page])

  return (
    <SearchContext.Provider value={{ fetchMore, textRef, handleSearch, search, page, setSearch, setPage }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider