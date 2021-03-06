import "styles/globals.css"
import "styles/scss/loader.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "styles/slider.css"
import type { AppProps } from "next/app"
import Provider from "graphql/provider"
import FavouriteProvider from "context/Favourite/FavouriteProvider"
import { Header } from "components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavouriteProvider>
      <Provider>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </FavouriteProvider>
  )
}

export default MyApp
