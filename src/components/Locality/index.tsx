import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { usePlacesAutocomplete } from "../../hooks/usePlacesAutocomplete";
import type { PlacePrediction } from "../../hooks/usePlacesAutocomplete";

interface Props {
  countryCode?: string;
  onSelect: (location: string) => void;
}

const Locality = ({ countryCode, onSelect }: Props) => {
  const { setInput, options, loading } = usePlacesAutocomplete(countryCode);

  return (
    <Autocomplete
      sx={{ width: 320 }}
      options={options}
      getOptionLabel={(option) => option.description}
      filterOptions={(x) => x}
      loading={loading}
      onInputChange={(_, value) => setInput(value)}
      onChange={(_, value: PlacePrediction | null) => {
        if (value) {
          onSelect(value.description);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label="Locality"
          placeholder={countryCode ? "Search locality" : "Select country first"}
          disabled={!countryCode}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress size={18} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props} display="flex" gap={1}>
          <LocationOnIcon color="action" />
          <Typography variant="body2">{option.description}</Typography>
        </Box>
      )}
    />
  );
};

export default Locality;
