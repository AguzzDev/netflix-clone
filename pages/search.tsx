import { useRouter } from 'next/router'
import { useContext } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import Head from 'next/head'
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';

import { Header } from 'components/Header'
import SearchContext from 'context/Search/SearchContext'
import FavouriteContext from 'context/Favourite/FavouriteContext'
import { IconsXXS } from 'components/Icons'
import { PlusSmIcon } from '@heroicons/react/outline'
import { ModalDetails } from 'components/Modal'
import { FavouriteProps, SearchProps } from 'types/types'

const Search = () => {
  const router = useRouter()
  const { ref, inView } = useInView()

  const query = router.query.q
  const { search, fetchMore }: SearchProps = useContext(SearchContext)
  const { addToFavourite, setButton2, button2 }: FavouriteProps = useContext(FavouriteContext)

  useMemo(() => {
    if (inView) {
      fetchMore()
    }
  }, [inView])

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/nlogo.png" />
      </Head>

      <Header />

      <main className='pt-24 mx-5 sm:mx-[70px] mb-10'>
        <h1 className="mb-5 text-xl text-white">Search results for: {query}</h1>

        {search.length !== 0
          ?
          <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-2'>
              {search?.map(video => video.map((v, i) => (
                <div key={i} className="group transform duration-300 hover:z-50 hover:scale-125 relative w-full h-[100px] sm:h-[154px]">
                  {v.backdrop_path
                    ? <Image src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} layout="fill" className='absolute top-0 bg-cover rounded-md' />
                    : <Image src="/netflixnoimage.jpg" layout="fill" className='absolute top-0 bg-cover rounded-md' />
                  }

                  <motion.div
                    whileInView={{ y: "-10px" }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                    className='absolute top-0 hidden w-full h-full group-hover:block'
                  >
                    <div className="flex flex-col justify-end h-full px-2 pb-2">
                      <div className="flex space-x-2">
                        <button className="flex items-center justify-center w-10 h-10 md:w-[1.8rem] md:h-[1.8rem] bg-white rounded-full hover:bg-opacity-80">
                          <img src="/play.png" className="w-[0.7rem] h-[0.7rem]" />
                        </button>
                        <button
                          onClick={() => addToFavourite(v)}
                          onMouseEnter={() => setButton2(true)}
                          onMouseLeave={() => setButton2(false)} className="flex items-center justify-center w-10 h-10 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500">
                          {button2 ? <IconsXXS Icon={PlusSmIcon} color="black" /> : <IconsXXS Icon={PlusSmIcon} color="white" />}
                        </button>
                        <ModalDetails videos={v} />
                      </div>

                      <h1 className='text-sm md:text-md font-bold text-white'>
                        {v.title ? v.title : v.name}
                      </h1>
                    </div>
                  </motion.div>
                </div>
              )))}
            </div>
            <div ref={ref} />
          </>
          : <h1 className="text-xl text-white">No hay resultados para tu busqueda</h1>
        }
      </main>

    </>
  )
}

export default Search