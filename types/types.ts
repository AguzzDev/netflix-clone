import { Dispatch, ReactChild, ReactChildren, SetStateAction } from "react"

export interface PropsChildren {
  children: ReactChild | ReactChildren
}

export interface SearchProps {
  search: MoviesProps[]
  page: number
  setPage: Dispatch<SetStateAction<string>>
  setSearch: Dispatch<SetStateAction<MoviesProps[]>>
}

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

export interface AllMoviesProps {
  videos: MoviesProps
}

export interface MoviesProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  title: string;
  origin_country: string[];
  original_language: LanguageProps;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export enum LanguageProps {
  En = "en",
  Es = "es",
  Ko = "ko",
  Pt = "pt",
}
