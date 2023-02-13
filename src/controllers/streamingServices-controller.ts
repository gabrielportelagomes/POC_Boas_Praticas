import { Request, Response } from "express";
import streamingServicesService from "../services/streamingServices-service";

export async function getStreamingServices(req: Request, res: Response) {
  try {
    const result = await streamingServicesService.getStreamingServices();

    const streamingServices = result;

    return res.status(200).send(streamingServices);
  } catch (error) {
    res.sendStatus(500);
  }
}
