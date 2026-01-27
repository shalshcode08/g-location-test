import type { Request, Response } from "express";
import { validateLocationPayload } from "../utils/validate";
import { persistLocation } from "../services/location.service";

export const saveLocation = async (req: Request, res: Response) => {
  try {
    const { country, location } = req.body;

    validateLocationPayload(country, location);

    await persistLocation({ country, location });

    return res.status(200).json({
      success: true,
      message: "Location stored successfully",
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Invalid request",
    });
  }
};
