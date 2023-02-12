import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function createStreamingService() {
  return await prisma.streaming_services.create({
    data: {
      name: faker.name.firstName(),
    },
  });
}
