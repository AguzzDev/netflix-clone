import { useQuery } from "@apollo/client"

import { FETCHING_QUERYS } from "graphql/queries"
import { toRandomVideo } from "utils/format"
import { CategorySmall } from "./Categories/CategorySmall"
import { CategoryLarge } from "./Categories/CategoryLarge"
import { Frontpage } from "./Frontpage"
import { Header } from "./Header"

function Inicio() {
  const { loading, data } = useQuery(FETCHING_QUERYS)

  return (
    <main>
      <Header />

      {!loading && (
        <>
          <Frontpage video={toRandomVideo(data.trendingWeek.results)} />
          <main>
            <CategorySmall
              videos={data.trending.results}
              title="Top Rated on Netflix"
            />
            <CategorySmall
              videos={data.trendingWeek.results}
              title="Trending Now"
            />
            <CategoryLarge
              videos={data.original.results}
              title="Netflix Originals"
            />
            <CategorySmall videos={data.action.results} title="Action" />
            <CategorySmall videos={data.adventure.results} title="Adventure" />
            <CategorySmall videos={data.comedy.results} title="Comedy" />
            <CategorySmall videos={data.horror.results} title="Horror" />
            <CategorySmall videos={data.romance.results} title="Romance" />
            <CategorySmall videos={data.animation.results} title="Animation" />
            <CategorySmall videos={data.upcoming.results} title="Upcoming" />
          </main>
        </>
      )}
    </main>
  )
}

export default Inicio
