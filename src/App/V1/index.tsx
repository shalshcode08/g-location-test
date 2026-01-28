import { useState } from "react";
import axios from "axios";
import CountryCity from "../../components/CountryCity";
import Locality from "../../components/Locality";

const V1App = () => {
  const [countryCode, setCountryCode] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!countryCode || !location) {
      setMessage("Please select country and location");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await axios.post("http://localhost:4000/api/location", {
        country: countryCode,
        location,
      });

      setMessage("✅ Location saved successfully");
    } catch (error: any) {
      setMessage(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1 className="text-md font-bold">
        this implementation is done using{" "}
        <span className="underline">
          google.maps.places.AutocompleteService
        </span>
      </h1>

      <CountryCity
        countryCode={countryCode}
        onCountryChange={(code) => {
          setCountryCode(code);
          setLocation("");
        }}
      />

      <Locality countryCode={countryCode} onSelect={setLocation} />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Saving..." : "Submit"}
      </button>

      {message && <div className="text-sm text-gray-700">{message}</div>}
    </div>
  );
};

export default V1App;
