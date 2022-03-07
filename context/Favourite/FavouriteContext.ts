import { createContext } from "react"
import { FavouriteProps } from "types/types"

const FavouriteContext = createContext<FavouriteProps>({} as FavouriteProps)

export default FavouriteContext

