//api access token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDU2ZjgxM2RhNzU1OGMwZDBkZGI3ODhkMjRjZDZmNSIsIm5iZiI6MTc1NzMzNzcyNy43MDUsInN1YiI6IjY4YmVkODdmYWQzZmMwNTNiNDliYzU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSELTeRLUhzzdezyHoL1D1tSK7NviAezIRepcwn2n4w

// api key: 5456f813da7558c0d0ddb788d24cd6f5

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response: Response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // ats-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

// /discover/movie
