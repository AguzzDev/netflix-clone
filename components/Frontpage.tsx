import { motion } from "framer-motion"
import { AllMoviesProps } from "types/types"

export const Frontpage = ({ videos }: AllMoviesProps) => {
  const { overview, backdrop_path, title, name } = videos

  return (
    <div className="relative h-[85vh] lg:h-[80vh] w-full">
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className="w-full h-full bg-cover bg-no-repeat bg-top shadow-2xl" style={{ willChange: "opacity, transform" }} />

      <div className="absolute top-0 w-full">
        <div className="flex items-end justify-center lg:justify-start lg:items-center mx-[70px] h-[80vh]">

          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col space-y-4 lg:w-4/6 mb-5 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white text-center lg:text-left" style={{ textShadow: "2px 2px 4px rgb(20 20 20 / 45%)" }}>{title ? title : name}</h1>
            <p className="lg:w-4/6 break-words text-white lg:text-xl text-center lg:text-left">{overview}</p>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[7.5rem]" style={{ background: "linear-gradient(180deg,transparent,rgba(16,16,16,.6),#111112)" }}></div>
    </div>
  )
}
