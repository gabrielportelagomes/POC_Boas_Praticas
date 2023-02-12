import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function createMovie(
  streaming_service_id: number,
  genre_id: number
) {
  return await prisma.movies.create({
    data: {
      name: faker.name.firstName(),
      streaming_service_id,
      genre_id,
    },
  });
}
