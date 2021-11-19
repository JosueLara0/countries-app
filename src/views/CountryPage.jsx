// Libraries
import React, { useState } from "react";

// Components
import SearchForm from "../components/CountryPage/SearchForm/SearchForm";
import Country from "../components/CountryPage/Country/Country";
import FetchError from "../components/FetchError/FetchError";

// APIs
import { getCountriesAPI } from "../Hooks/getCountriesAPI";

const CountryPage = () => {
  const [countryData, setCountryData] = useState([]);
  const [name, setName] = useState(null);
  const [error, setError] = useState(false);

  // Search and get one country from the API
  const handleFetchCountryData = async () => {
    const path = `name/${name}?fullText=true`;
    const response = await getCountriesAPI(path);
    if (response.status) {
      setError(response.message);
    } else {
      setCountryData(response);
      setError(false);
    }
  };

  return (
    <>
      <SearchForm
        setName={setName}
        handleFetchCountryData={handleFetchCountryData}
      />
      {error ? (
        <FetchError message={error} />
      ) : (
        <div>
          {countryData.map((infoCountry) => (
            <Country
              key={infoCountry.name.common}
              flag={infoCountry.flags.png}
              name={infoCountry.name.common}
              code={infoCountry.cca2}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CountryPage;
