import { useContext, useState } from 'react'
import { ChevronDownIcon, PlusSmIcon } from '@heroicons/react/outline'
import Modal from 'react-modal'

import FavouriteContext from 'context/Favourite/FavouriteContext'
import { IconsXXS } from './Icons'
import { AllMoviesProps, FavouriteProps } from 'types/types'

Modal.setAppElement('#__next')

export const ModalDetails = ({ videos }: AllMoviesProps) => {
  const { addToFavourite, setButton1, button1, setButton2, setButton3, button2, button3 }: FavouriteProps = useContext(FavouriteContext)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

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
        onMouseEnter={() => setButton3(true)}
        onMouseLeave={() => setButton3(false)}
        className="flex items-center justify-center w-5 h-5 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500"
      >
        {button3 ? <IconsXXS Icon={ChevronDownIcon} color="black" /> : <IconsXXS Icon={ChevronDownIcon} color="white" />}
      </button>

      <Modal
        className="rounded-md bg-black1 w-[65vw] h-[60vh] lg:w-[45vw] lg:h-[85vh]"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-modal"
      >
        <div className="relative">
          <img src={`https://image.tmdb.org/t/p/original/${videos.backdrop_path}`} className='w-full h-full bg-cover rounded-md' />

          <div className="absolute top-5 right-5">
            <button
              onClick={closeModal}
              onMouseEnter={() => setButton1(true)}
              onMouseLeave={() => setButton1(false)}
              className="transform rotate-45 flex items-center justify-center w-5 h-5 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500">
              {button1 ? <IconsXXS Icon={PlusSmIcon} color="black" /> : <IconsXXS Icon={PlusSmIcon} color="white" />}
            </button>
          </div>
          <div className="absolute bottom-0 left-4 mb-10 z-50 flex space-x-3 items-center">
            <button className="text-white bg-red1 px-5 lg:px-10 py-2 lg:py-3 rounded-md">Play</button>
            <button
              onClick={() => addToFavourite(videos)}
              onMouseEnter={() => setButton2(true)}
              onMouseLeave={() => setButton2(false)}
              className="flex items-center justify-center w-5 h-5 md:w-[1.8rem] md:h-[1.8rem] border-2 border-white rounded-full hover:bg-white transform duration-500">
              {button2 ? <IconsXXS Icon={PlusSmIcon} color="black" /> : <IconsXXS Icon={PlusSmIcon} color="white" />}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[7.5rem]" style={{ background: "linear-gradient(180deg,transparent,rgba(16,16,16,.6),#111112)" }}></div>
        </div>

        <section className='bg-black1 flex flex-col space-y-4 items-start px-7 py-4 text-white'>

          <h1 className='text-xl font-bold'>
            {videos.title ? videos.title : videos.name}
          </h1>
          <p className="text-left break-words">{videos.overview}</p>

        </section>

      </Modal>
    </>
  )
}
