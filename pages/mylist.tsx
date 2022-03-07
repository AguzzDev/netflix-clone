import { useContext } from "react"
import Head from "next/head"

import { CategorySmall } from "components/Categories/CategorySmall"
import FavouriteContext from "context/Favourite/FavouriteContext"
import { AllFavouriteProps } from "types/types"

function MyList() {
  const { favouriteList }: AllFavouriteProps = useContext(FavouriteContext)

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/nlogo.png" />
      </Head>

      <main>
        <div className="pt-32">
          <CategorySmall videos={favouriteList} title="My List" />
        </div>
      </main>
    </>
  )
}

export default MyList
