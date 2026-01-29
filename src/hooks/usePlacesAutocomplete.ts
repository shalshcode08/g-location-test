import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { isGooglePlacesReady } from "../utils/google";

export interface PlacePrediction {
  description: string;
  place_id: string;
}

export const usePlacesAutocomplete = (countryCode?: string) => {
  const [options, setOptions] = useState<PlacePrediction[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * Create AutocompleteService once
   */
  const service = useMemo(() => {
    if (!isGooglePlacesReady()) return null;

    return new (window as any).google.maps.places.AutocompleteService();
  }, []);

  /**
   * Debounced fetch function
   */
  const fetchPredictions = useMemo(
    () =>
      debounce((input: string) => {
        if (!service || !input) {
          setOptions([]);
          return;
        }

        setLoading(true);

        service.getPlacePredictions(
          {
            input,
            // types: ["(cities)"],
            componentRestrictions: countryCode
              ? { country: countryCode }
              : undefined,
          },
          (predictions: any[]) => {
            console.log(predictions);
            setOptions(
              predictions?.map((p) => ({
                description: p.description,
                place_id: p.place_id,
              })) || [],
            );
            setLoading(false);
          },
        );
      }, 400),
    [service, countryCode],
  );

  /**
   * Cleanup debounce on unmount
   */
  useEffect(() => {
    return () => {
      fetchPredictions.cancel();
    };
  }, [fetchPredictions]);

  return {
    setInput: fetchPredictions,
    options,
    loading,
  };
};
