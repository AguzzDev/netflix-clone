import { useRouter } from "next/router"
import { setCookie } from "nookies"
import { useRef, ChangeEvent } from "react"

export const useSearch = () => {
  const debounceRef = useRef<NodeJS.Timeout>()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current)
      clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setCookie(null, "query", e.target.value)
      router.push("/search")
    }, 500);
  }

  return { handleChange }
}