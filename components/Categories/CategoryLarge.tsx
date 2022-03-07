import { Slider } from "components/Slider"
import { AllMoviesProps } from "types/types"

interface Props {
  videos: AllMoviesProps
  title: string
}

export const CategoryLarge = ({ videos, title }: Props) => {
  return (
    <div className="flex flex-col mt-6 mb-2">
      <h1 className="mx-[30px] md:ml-[70px] text-xl font-bold text-white">
        {title}
      </h1>

      <div className="netflix-slider-2">
        <Slider
          videos={videos}
          width="w-[233px]"
          height="h-[354px]"
          size="large"
        />
      </div>
    </div>
  )
}
