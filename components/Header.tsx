import Image from "next/image"
import { SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

import { IconsXS } from "./Icons"
import SearchContext from "context/Search/SearchContext"

export const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const router = useRouter()
  const path = router.pathname

  const { handleSearch, textRef } = useContext(SearchContext)

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset === 0 ? false : true)
      return () => (window.onscroll = null)
    }
  }, []);

  return (
    <main className={`${scroll ? "navbar-true" : "navbar-false"}`}>
      <div className=" flex justify-between items-center py-3 mx-[30px] md:mx-[70px]">

        {/* Left */}
        <div className="flex">
          <Link passHref href="/">
            <div className="hidden md:block">
              <Image src="/netflix.svg" height={35} width={130} objectFit="cover" className="cursor-pointer" />
            </div>
          </Link>

          <Link passHref href="/">
            <div className="block md:hidden">
              <Image src="/nlogo.png" height={50} width={50} objectFit="cover" className="cursor-pointer" />
            </div>
          </Link>


          <div className="hidden lg:flex items-center ml-10 space-x-6 pb-1">
            <Link passHref href="/"><div className={`text-white ${path === "/" ? "font-bold" : "font-medium"} cursor-pointer xl:text-lg`}>Home</div></Link>
            <button><div className={`text-white ${path === "/tvseries" ? "font-bold" : "font-medium"} cursor-pointer xl:text-lg`}>TV Series</div></button>
            <button><div className={`text-white ${path === "/movies" ? "font-bold" : "font-medium"} cursor-pointer xl:text-lg`}>Movies</div></button>
            <button><div className={`text-white ${path === "/popular" ? "font-bold" : "font-medium"} cursor-pointer xl:text-lg`}>New & Popular</div></button>
            <Link passHref href="/mylist"><div className={`text-white ${path === "/mylist" ? "font-bold" : "font-medium"} cursor-pointer xl:text-lg`}>My list</div></Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">

          <div className="flex space-x-3 items-center justify-end group w-full">
            <div className="flex items-center justify-end">
              <div className="w-4/6 xl:w-full mr-3 border-2 border-white border-opacity-80 py-1 group-focus-visible:block rounded-md">
                <input type="text" placeholder="Search movies..." ref={textRef} onChange={() => handleSearch()} className="text-white focus:outline-none bg-transparent px-2" />
              </div>
              <div className="cursor-pointer">
                <IconsXS Icon={SearchIcon} color="white" />
              </div>
            </div>
            <div className="flex items-center w-full h-full">
              <Image src="/UserIcons/1.png" width={40} height={40} objectFit="cover" />
            </div>
          </div>


        </div>
      </div>

    </main>
  )
}
