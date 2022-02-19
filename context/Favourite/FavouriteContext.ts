import { createContext, Dispatch, SetStateAction } from "react"
import { MoviesProps } from "types/types"

export interface FavouriteProps {
  button1: boolean
  button2: boolean
  button3: boolean
  setButton1: Dispatch<SetStateAction<boolean>>
  setButton2: Dispatch<SetStateAction<boolean>>
  setButton3: Dispatch<SetStateAction<boolean>>
  favouriteList: MoviesProps[]
  setFavouriteList: Dispatch<SetStateAction<MoviesProps[]>>
  addToFavourite: (video: MoviesProps) => void
  removeToFavourite: (video: MoviesProps) => void
}

const FavouriteContext = createContext<FavouriteProps>({})

export default FavouriteContext