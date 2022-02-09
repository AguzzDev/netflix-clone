import { MoviesProps } from "types/types"

const toRandomVideo = (videos: MoviesProps[]): MoviesProps => {
  return videos[Math.floor(Math.random() * videos.length)]
}

export { toRandomVideo }