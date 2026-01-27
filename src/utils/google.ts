export const isGooglePlacesReady = () => {
  if (typeof window === "undefined") return false;

  return Boolean(
    (window as any).google?.maps?.places
  );
};
