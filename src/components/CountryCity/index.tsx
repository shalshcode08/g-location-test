import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";

import { countryData } from "../../utils/country";

const CountryCity = () => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
    setCity("");
  };

  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <div className="flex flex-row items-center gap-4 justify-between">
        <FormControl fullWidth size="small">
          <InputLabel id="country-select-label">Country</InputLabel>

          <Select
            labelId="country-select-label"
            value={country}
            label="Country"
            onChange={handleCountryChange}
          >
            {countryData.values.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          size="small"
          label="City"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!country}
          fullWidth
        />
      </div>

      {(country || city) && (
        <div className="text-sm text-gray-700 space-y-1">
          <div>
            Country Code: <strong>{country || "-"}</strong>
          </div>
          <div>
            City: <strong>{city || "-"}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCity;
