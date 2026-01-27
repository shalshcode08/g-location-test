import fs from "fs";
import path from "path";
import type { LocationPayload } from "../types/location";

const dataDir = path.join(__dirname, "../../data");
const filePath = path.join(dataDir, "locations.csv");

export const appendToCsv = async (payload: LocationPayload) => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    fs.writeFileSync(filePath, "country,location,timestamp\n", "utf-8");
  }

  const row = `${payload.country},"${payload.location}",${new Date().toISOString()}\n`;

  fs.appendFileSync(filePath, row, "utf-8");
};
