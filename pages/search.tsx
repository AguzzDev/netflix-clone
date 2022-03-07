import { useContext, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"
import { Waypoint } from "react-waypoint"

import FavouriteContext from "context/Favourite/FavouriteContext"
import { IconsXXS } from "components/Icons"
import { PlusSmIcon } from "@heroicons/react/outline"
import { ModalDetails } from "components/Modal"
import { GET_SEARCH } from "graphql/queries"
import { useQuery } from "@apollo/client"
import { parseCookies } from "nookies"
import { MoviesProps } from "types/types"

const Search = () => {
  const [result, setResult] = useState<MoviesProps[] | any[]>([])
  const [page, setPage] = useState<number>(1)
  const [button, setButton] = useState(false)

  const { query: queryCookie } = parseCookies()

  const { addToFavourite } = useContext(FavouriteContext)

  const { data, loading, fetchMore } = useQuery(GET_SEARCH, {
    variables: { query: queryCookie || "a", page: page },
  })

  useEffect(() => {
    setResult((prev) => Array.from(new Set([...prev, data?.search?.results])))
  }, [data])

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/nlogo.png" />
      </Head>

      <main className="pt-24 mx-5 sm:mx-[70px] mb-10">
        {loading ? (
          <h1>asd</h1>
        ) : data?.search?.results?.length !== 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-2">
              {result?.map((res) =>
                res?.map((v: MoviesProps, i: number) => (
                  <>
                    <div
                      key={i}
                      className="group transform duration-300 hover:z-50 hover:scale-125 relative w-full h-[100px] sm:h-[154px]"
                    >
                      {v?.backdrop_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${v?.backdrop_path}`}
                          layout="fill"
                          className="absolute top-0 bg-cover rounded-md"
                        />
                      ) : (
                        <Image
                          src="/netflixnoimage.jpg"
                          layout="fill"
                          className="absolute top-0 bg-cover rounded-md"
                        />
                      )}

                      <motion.div
                        whileInView={{ y: "-10px" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 hidden w-full h-full group-hover:block"
                      >
                        <div className="flex flex-col justify-end h-full px-2 pb-2">
                          <div className="flex space-x-2">
                            <button className="flex items-center justify-center w-10 h-10 md:w-[1.8rem] md:h-[1.8rem] bg-white rounded-full hover:bg-opacity-80">
                              <img
                                src="/play.png"
                                className="w-[0.7rem] h-[0.7rem]"
                              />
                            </button>
                            <button
                              onClick={() => addToFavourite(v)}
                              onMouseEnter={() => setButton(true)}
                              onMouseLeave={() => setButton(false)}
                              className="flex items-center justify-center w-10 h-10 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500"
                            >
                              {button ? (
                                <IconsXXS Icon={PlusSmIcon} color="black" />
                              ) : (
                                <IconsXXS Icon={PlusSmIcon} color="white" />
                              )}
                            </button>
                            <ModalDetails video={v} />
                          </div>

                          <h1 className="text-sm font-bold text-white md:text-md">
                            {v?.title ? v?.title : v?.name}
                          </h1>
                        </div>
                      </motion.div>
                    </div>

                    {/* {i === res.length - 1 && (
                      <Waypoint
                        onEnter={() =>
                          fetchMore({
                            variables: {
                              query: queryCookie || "a",
                              page: setPage((prev) => prev + 1),
                            },
                          })
                        }
                      />
                    )} */}
                  </>
                ))
              )}
            </div>
          </>
        ) : (
          <h1>No hay resultados para esta busqueda</h1>
        )}
      </main>
    </>
  )
}

export default Search
