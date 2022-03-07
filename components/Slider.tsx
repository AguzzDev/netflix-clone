import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline"
import { useContext } from "react"
import { motion } from "framer-motion"

import { IconsXXS } from "components/Icons"
import FavouriteContext from "context/Favourite/FavouriteContext"
import { useRouter } from "next/router"
import { ModalDetails } from "./Modal"
import { AllMoviesProps, MoviesProps } from "types/types"
import { useState } from "react"

SwiperCore.use([Navigation])

interface Props {
  videos: AllMoviesProps | any
  width: string
  height: string
  size: string
}

export function Slider({ videos, width, height, size }: Props) {
  const router = useRouter()
  const [button, setButton] = useState(false)

  const { favouriteList, addToFavourite, removeToFavourite } =
    useContext(FavouriteContext)

  return (
    <>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2.7,
            slidesPerGroup: 2.7,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1324: {
            slidesPerView: 6.7,
            slidesPerGroup: 6.7,
          },
        }}
        navigation
        allowTouchMove={false}
        spaceBetween={7}
      >
        {router.pathname === "/"
          ? videos.map((video: MoviesProps, i: number) => (
              <SwiperSlide
                key={video.id}
                className={`${
                  i === 0 && "mx-[30px] md:ml-[70px]"
                } group cursor-pointer ${height} ${width}`}
              >
                <div>
                  {size !== "large" ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${video.backdrop_path}`}
                      className={`bg-cover rounded-md`}
                    />
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${video.poster_path}`}
                      className={`bg-cover rounded-md`}
                    />
                  )}

                  <motion.div
                    whileInView={{ y: "-10px" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 hidden w-full h-full group-hover:block"
                  >
                    <div className="flex flex-col justify-end h-full px-2">
                      <div className="flex space-x-2">
                        <button className="flex items-center justify-center w-[1.8rem] h-[1.8rem] bg-white rounded-full hover:bg-opacity-80">
                          <img
                            src="/play.png"
                            className="w-[0.7rem] h-[0.7rem]"
                          />
                        </button>
                        <button
                          onClick={() => addToFavourite(video)}
                          onMouseEnter={() => setButton(true)}
                          onMouseLeave={() => setButton(false)}
                          className="flex items-center justify-center w-[1.8rem] h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500"
                        >
                          {button ? (
                            <IconsXXS Icon={PlusSmIcon} color="black" />
                          ) : (
                            <IconsXXS Icon={PlusSmIcon} color="white" />
                          )}
                        </button>

                        <ModalDetails key={video.id} video={video} />
                      </div>

                      <h1 className="font-bold text-white">
                        {video.title ? video.title : video.name}
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))
          : favouriteList?.map((video: MoviesProps, i: number) => (
              <SwiperSlide
                key={video.id}
                className={`${
                  i === 0 && "mx-[30px] md:ml-[70px]"
                } group cursor-pointer ${height} ${width}`}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${video.backdrop_path}`}
                    className={`bg-cover rounded-md`}
                  />

                  <div className="absolute top-0 hidden w-full h-full group-hover:block">
                    <div className="flex flex-col justify-end h-full px-2 pb-2">
                      <div className="flex space-x-2">
                        <button className="flex items-center justify-center w-[1.8rem] h-[1.8rem] bg-white rounded-full hover:bg-opacity-80">
                          <img
                            src="/play.png"
                            className="w-[0.7rem] h-[0.7rem]"
                          />
                        </button>
                        <button
                          onClick={() => removeToFavourite(video)}
                          onMouseEnter={() => setButton(true)}
                          onMouseLeave={() => setButton(false)}
                          className="flex items-center justify-center w-[1.8rem] h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500"
                        >
                          {button ? (
                            <IconsXXS Icon={MinusSmIcon} color="black" />
                          ) : (
                            <IconsXXS Icon={MinusSmIcon} color="white" />
                          )}
                        </button>
                        <ModalDetails key={video.id} video={video} />
                      </div>

                      <h1 className="font-bold text-white">
                        {video.title ? video.title : video.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}
