import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { countryData } from "../../utils/country";

interface Props {
  countryCode: string;
  onCountryChange: (code: string) => void;
}

const CountryCity = ({ countryCode, onCountryChange }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onCountryChange(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ width: 320 }}>
      <InputLabel id="country-select-label">Country</InputLabel>

      <Select
        labelId="country-select-label"
        value={countryCode}
        label="Country"
        onChange={handleChange}
      >
        {countryData.values.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryCity;
