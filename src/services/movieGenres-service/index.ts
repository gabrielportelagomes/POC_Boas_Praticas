import { movie_genres } from "@prisma/client";
import movieGenresRepositoy from "../../repositories/movieGenres-repository";

async function getMovieGenres(): Promise<movie_genres[]> {
  const movieGenres = await movieGenresRepositoy.selectMovieGenres();

  return movieGenres;
}

const movieGenresService = {
  getMovieGenres,
};

export default movieGenresService;
