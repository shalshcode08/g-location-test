export const validateLocationPayload = (
  country: unknown,
  location: unknown,
) => {
  if (typeof country !== "string" || country.trim().length !== 2) {
    throw new Error("Invalid country code");
  }

  if (typeof location !== "string" || location.trim().length < 2) {
    throw new Error("Invalid location");
  }
};
