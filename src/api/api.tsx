export const API_KEY: string = 'ea5b366a34443d7e6951eaa51580be36';

const api = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchDramaMovies: `discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMovies: `discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasyMovies: `discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchFamilyRomances: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchFamilyCategory: `discover/movie?api_key=${API_KEY}&with_genres=`,
};

export default api