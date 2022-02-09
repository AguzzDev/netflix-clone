import { useState } from "react"
import { MoviesProps, PropsChildren } from "types/types"
import FavouriteContext from "./FavouriteContext"

const FavouriteProvider = ({ children }: PropsChildren) => {
  const [favouriteList, setFavouriteList] = useState<MoviesProps[]>([])

  const [button1, setButton1] = useState<boolean>(false)
  const [button2, setButton2] = useState<boolean>(false)
  const [button3, setButton3] = useState<boolean>(false)

  const addToFavourite = (video: MoviesProps) => {
    setFavouriteList((prevFavourite): MoviesProps[] => Array.from(new Set([...prevFavourite, video])))
  }
  const removeToFavourite = (video: MoviesProps) => {
    setFavouriteList(favourite => favourite.filter((favourite) => favourite !== video))
  }

  return (
    <FavouriteContext.Provider value={{ favouriteList, setFavouriteList, addToFavourite, removeToFavourite, button1, button2, button3, setButton1, setButton2, setButton3 }}>
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider