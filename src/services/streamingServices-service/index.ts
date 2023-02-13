import streamingServicesRepositoy from "../../repositories/streamingServices-repository";
import { streaming_services } from "@prisma/client";

async function getStreamingServices(): Promise<streaming_services[]> {
  const streamingServices =
    await streamingServicesRepositoy.selectStreamingServices();

  return streamingServices;
}

const streamingServicesService = {
  getStreamingServices,
};

export default streamingServicesService;
