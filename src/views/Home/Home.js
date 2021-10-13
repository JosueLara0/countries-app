// Libraries
import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

// APIs
import {getCountriesAPI} from '../APIs/getCountriesAPI';

// Components
import Country from '../components/CountryPage/Country';
import LoadingSpinner from '../components/LoadingSpinner';

//Views
import CountryPage from './CountryPage';

//Styles


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
            // console.log(response);
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

    const CountriesList = CountriesData.slice(firstCountry, lastCountry).map((country) => (
        <Country
            key={country.name.common}
            flag={country.flags.png}
            name={country.name.common}
            code={country.cca2}
        />
    ));

    return (
        <div>
            {CountriesData.length > 4 ? (
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <CountryPage/>
                        </Col>
                        <Col md={8} style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                            {CountriesList}
                            <Button onClick={handlePreviousPageButton}
                                    variant="outline-light"
                                    style={{width: '16rem', marginRight: "4rem", marginLeft: "4rem"}}>
                                Previous Countries
                            </Button>
                            <Button onClick={handleNextPageButton}
                                    variant="outline-light"
                                    style={{width: '16rem', marginRight: "4rem", marginLeft: "4rem"}}>
                                More Countries
                            </Button>
                        </Col>
                    </Row>
                </Container>
            ) : (<LoadingSpinner/>)
            }
        </div>
    );
};

export default Home;