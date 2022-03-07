import { useContext, useState } from "react"
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/outline"
import Modal from "react-modal"

import FavouriteContext from "context/Favourite/FavouriteContext"
import { IconsXXS } from "./Icons"
import { AllMoviesProps, MoviesProps } from "types/types"

Modal.setAppElement("#__next")

export const ModalDetails = ({ video }: AllMoviesProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const { addToFavourite } = useContext(FavouriteContext)
  const [mouse1, setMouse1] = useState(false)
  const [mouse2, setMouse2] = useState(false)
  const [mouse3, setMouse3] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <button
        onClick={openModal}
        onMouseEnter={() => setMouse1(true)}
        onMouseLeave={() => setMouse1(false)}
        className={`flex items-center justify-center w-5 h-5 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full transform duration-500 hover:bg-white`}
      >
        {mouse1 ? (
          <IconsXXS Icon={ChevronDownIcon} color="black" />
        ) : (
          <IconsXXS Icon={ChevronDownIcon} color="white" />
        )}
      </button>

      <Modal
        className="rounded-md bg-black1 w-[65vw] h-[60vh] lg:w-[45vw] lg:h-[85vh]"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-modal"
      >
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`}
            className="w-full h-full bg-cover rounded-md"
          />

          <div className="absolute top-5 right-5">
            <button
              onClick={closeModal}
              onMouseEnter={() => setMouse2(true)}
              onMouseLeave={() => setMouse2(false)}
              className={`flex items-center justify-center w-5 h-5 rotate-45 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full transform duration-500 hover:bg-white`}
            >
              {mouse2 ? (
                <IconsXXS Icon={PlusSmIcon} color="black" />
              ) : (
                <IconsXXS Icon={PlusSmIcon} color="white" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 z-50 flex items-center mb-10 space-x-3 left-4">
            <button className="px-5 py-2 text-white rounded-md bg-red1 lg:px-10 lg:py-3">
              Play
            </button>
            <button
              onClick={() => addToFavourite(video as MoviesProps)}
              onMouseEnter={() => setMouse3(true)}
              onMouseLeave={() => setMouse3(false)}
              className={`flex items-center justify-center w-5 h-5 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full transform duration-500 hover:bg-white`}
            >
              {mouse3 ? (
                <IconsXXS Icon={PlusSmIcon} color="black" />
              ) : (
                <IconsXXS Icon={PlusSmIcon} color="white" />
              )}
            </button>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-[7.5rem]"
            style={{
              background:
                "linear-gradient(180deg,transparent,rgba(16,16,16,.6),#111112)",
            }}
          ></div>
        </div>

        <section className="flex flex-col items-start py-4 space-y-4 text-white bg-black1 px-7">
          <h1 className="text-xl font-bold">
            {video?.title ? video?.title : video?.name}
          </h1>
          <p className="text-left break-words">{video?.overview}</p>
        </section>
      </Modal>
    </>
  )
}
