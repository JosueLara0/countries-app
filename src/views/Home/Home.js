// Libraries
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// Views
import CountryPage from "../CountryPage";

// Components
import Country from "../../components/CountryPage/Country/Country";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// APIs
import { getCountriesAPI } from "../../Hooks/getCountriesAPI";

// Styles
import "./Home.styles.css";

const Home = () => {
  const [CountriesData, setCountriesData] = useState([]);
  const [firstCountry, setFirstCountry] = useState(0);
  const [lastCountry, setLastCountry] = useState(4);

  // Get all the countries from the API
  useEffect(() => {
    const handleFetchCountriesAPI = async () => {
      const path = "all";
      const response = await getCountriesAPI(path);
      setCountriesData(response);
    };
    handleFetchCountriesAPI();
  }, []);

  const handleNextPageButton = () => {
    if (lastCountry !== 252) {
      setFirstCountry(lastCountry);
      setLastCountry(lastCountry + 4);
    }
  };

  const handlePreviousPageButton = () => {
    if (firstCountry !== 0) {
      setLastCountry(firstCountry);
      setFirstCountry(firstCountry - 4);
    }
  };

  const CountriesList = CountriesData.slice(firstCountry, lastCountry).map(
    (country) => (
      <Country
        key={country.name.common}
        flag={country.flags.png}
        name={country.name.common}
        code={country.cca2}
      />
    )
  );

  return (
    <>
      {CountriesData.length > 4 ? (
        <Container fluid>
          <Row>
            <Col md={4}>
              <CountryPage />
            </Col>
            <Col md={8} className="countries-col">
              {CountriesList}
              <Button
                onClick={handlePreviousPageButton}
                variant="outline-light"
                className="button"
              >
                Previous Countries
              </Button>
              <Button
                onClick={handleNextPageButton}
                variant="outline-light"
                className="button"
              >
                More Countries
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Home;
