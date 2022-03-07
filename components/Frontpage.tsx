import { motion } from "framer-motion"
import { AllMoviesProps, MoviesProps } from "types/types"

export const Frontpage = ({ video }: AllMoviesProps) => {
  const { overview, backdrop_path, title, name } = video as MoviesProps

  return (
    <div className="relative h-[85vh] lg:h-[80vh] w-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="w-full h-full bg-top bg-no-repeat bg-cover shadow-2xl"
        style={{ willChange: "opacity, transform" }}
      />

      <div className="absolute top-0 w-full">
        <div className="flex items-end justify-center lg:justify-start lg:items-center mx-[70px] h-[80vh]">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col mb-5 space-y-4 lg:w-4/6 lg:mb-0"
          >
            <h1
              className="text-4xl font-bold leading-tight text-center text-white md:text-5xl lg:text-6xl lg:text-left"
              style={{ textShadow: "2px 2px 4px rgb(20 20 20 / 45%)" }}
            >
              {title ? title : name}
            </h1>
            <p className="text-center text-white break-words lg:w-4/6 lg:text-xl lg:text-left">
              {overview}
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[7.5rem]"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(16,16,16,.6),#111112)",
        }}
      ></div>
    </div>
  )
}
