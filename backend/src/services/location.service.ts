import type { LocationPayload } from "../types/location";
import { appendToCsv } from "../utils/csvWriter";

export const persistLocation = async (
  payload: LocationPayload
) => {
  await appendToCsv(payload);
};
