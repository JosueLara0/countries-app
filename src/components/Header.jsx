// Libraries
import React, {useState} from "react";

// APIs
import {getCountriesAPI} from '../APIs/getCountriesAPI';

// Components
import SearchForm from "../components/CountryPage/SearchForm";
import Country from "../components/CountryPage/Country";
import FetchError from "../components/FetchError";
import LoadingSpinner from '../components/LoadingSpinner';


const Header = () => {
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
            {countryData.length > 0 ? (
                error ? (
                    <FetchError message={error}/>
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
                )
            ) : (<></>)
            }
        </>
    );
};

export default Header;

