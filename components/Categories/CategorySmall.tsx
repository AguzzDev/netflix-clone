import { Slider } from "components/Slider"
import { AllMoviesProps } from "types/types"

interface Props {
  videos: AllMoviesProps
  title: string
}

export const CategorySmall = ({ videos, title }: Props) => {
  return (
    <div className="flex flex-col mb-2 mt-6">
      <h1 className="mx-[30px] md:ml-[70px] text-xl font-bold text-white">{title}</h1>

      <div className="netflix-slider">
        <Slider videos={videos} width="w-[233px]" height="h-[154px]" size="small" />
      </div>
    </div>
  )
}