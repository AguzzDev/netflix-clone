import { Dispatch } from "react"
import { SetStateAction } from "react"

export interface PropsChildren {
  children: JSX.Element | JSX.Element[]
}

export interface AllMoviesProps {
  videos?: MoviesProps[] | undefined
  video?: MoviesProps | undefined
}

export interface AllFavouriteProps {
  videos?: MoviesProps[]
  favouriteList: any
}

export interface FavouriteProps {
  favouriteList: MoviesProps[]
  setFavouriteList: Dispatch<SetStateAction<MoviesProps[]>>
  addToFavourite: (video: MoviesProps) => void
  removeToFavourite: (video: MoviesProps) => void
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
