export interface TvDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShow {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  title?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date?: string;
  genres: { id: number; name: string }[];
  status: string;
  revenue?: string;
}

export interface TvshowsResults {
  results: TvShow[];
}

export interface IndividualTvShow {
  poster_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  original_language: string;
  popularity: number;
  origin_country: string[];
  genres: { id: number; name: string }[];
  status: string;
  title?: string;
  release_date?: string;
  revenue?: string;
}

export interface TvVideos {
  id: string;
  results: {
    site: string;
    key: string;
  }[];
}

export interface TvPhotos {
  backdrops: {
    file_path: string;
  }[];
}
export interface TvCredits {
  cast: {
    name: string;
    profile_path: string | null;
  }[];
}
