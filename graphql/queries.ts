import { gql } from "@apollo/client";

export const FETCHING_QUERYS = gql`
  query Querys{
   trendingWeek @rest(type:"trending", path:"trending/all/week?api_key=2ef4837c731e20f8ed6a545c2d674df3"){
     results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
    },
    trending @rest(type:"trending",path:"movie/top_rated?api_key=2ef4837c731e20f8ed6a545c2d674df3"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
    }
  },
  original @rest(type:"original",path:"discover/tv?api_key=2ef4837c731e20f8ed6a545c2d674df3&with_networks=213&sort_by=popularity.desc&language=en-US"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
    }
  },
  action @rest(type:"CategoryAction",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=28"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  adventure @rest(type:"CategoryAction",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=12"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  comedy @rest(type:"CategoryComedy",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=35"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  horror @rest(type:"CategoryHorror",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=27"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  romance @rest(type:"CategoryRomance",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  animation @rest(type:"CategoryAnimation",path:"discover/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&sort_by=popularity.desc&page=1&with_genres=16"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  upcoming @rest(type:"MoviesUpcoming",path:"movie/upcoming?api_key=2ef4837c731e20f8ed6a545c2d674df3&language=en-US&page=1"){
    results{
      backdrop_path
      first_air_date
      genre_ids
      id
      name
      title
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_average
      vote_count
     }
  },
  }
`;

export const GET_SEARCH = gql`
    query getSearch($query:String,$page:Int) {
      search(query:$query,page:$page)@rest(path:"search/movie?api_key=2ef4837c731e20f8ed6a545c2d674df3&query={args.query}&page={args.page}", type:"search"){
      results{
        backdrop_path
        first_air_date
        genre_ids
        id
        name
        title
        origin_country
        original_language
        original_name
        overview
        popularity
        poster_path
        vote_average
        vote_count
      }
    }
  }
`

