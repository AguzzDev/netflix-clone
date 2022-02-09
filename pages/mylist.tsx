import { useContext } from "react"
import Head from "next/head"

import { CategorySmall } from "components/Categories/CategorySmall"
import { Header } from "components/Header"
import FavouriteContext from "context/Favourite/FavouriteContext"
import { FavouriteProps } from "types/types"

function myList() {
  const { favouriteList }: FavouriteProps = useContext(FavouriteContext)

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/nlogo.png" />
      </Head>

      <main>
        <Header />
        <div className="pt-32">
          <CategorySmall videos={favouriteList} title="My List" />
        </div>

      </main>
    </>
  )
};

export default myList