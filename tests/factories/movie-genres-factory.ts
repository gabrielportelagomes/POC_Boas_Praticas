import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function createMovieGenre() {
  return await prisma.movie_genres.create({
    data: {
      name: faker.name.firstName(),
    },
  });
}
