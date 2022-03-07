import { useState } from "react"
import { MoviesProps, PropsChildren } from "types/types"
import FavouriteContext from "./FavouriteContext"

const FavouriteProvider = ({ children }: PropsChildren) => {
  const [favouriteList, setFavouriteList] = useState<MoviesProps[]>([])

  const addToFavourite = (video: MoviesProps) => {
    setFavouriteList((prevFavourite): MoviesProps[] =>
      Array.from(new Set([...prevFavourite, video]))
    )
  }
  const removeToFavourite = (video: MoviesProps) => {
    setFavouriteList((favourite) =>
      favourite.filter((favourite) => favourite !== video)
    )
  }

  return (
    <FavouriteContext.Provider
      value={{
        favouriteList,
        setFavouriteList,
        addToFavourite,
        removeToFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider
