// Libraries
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

// Components
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// APIs
import {getCountriesAPI} from '../../APIs/getCountriesAPI';

// Styles
import "./CountryDetails.styles.css";

const CountryDetails = () => {
    const {country} = useParams();
    const [details, setDetails] = useState([]);

    // Get the details of one country from the API
    useEffect(() => {
        const fetchDetailsAPI = async () => {
            const path = `name/${country}?fullText=true`;
            const response = await getCountriesAPI(path);
            setDetails(response[0]);
        };
        fetchDetailsAPI();
    }, [country]);

    return (
        <div className="country-details">
            {details.name ? (
                <Card className="country-card" bg="dark" text="white">
                    <Card.Img variant="top" src={details.flags.png} alt={details.name.common}/>
                    <Card.Body>
                        <Card.Title>{details.name.common}</Card.Title>
                        <Card.Text>Capital: {details.capital[0]}</Card.Text>
                        <Card.Text>Official Name: {details.name.official}</Card.Text>
                        <Card.Text>Continent: {details.subregion}</Card.Text>
                    </Card.Body>
                    <Card.Body className="country-card-body">
                        <Button variant="outline-light">
                            <Link to={`/`}>Back Home</Link>
                        </Button>
                        <Button variant="outline-light">
                            <Link to={`/weather/${country}/${details.capital[0]}`}>See Capital Weather</Link>
                        </Button>
                    </Card.Body>
                </Card>
            ) : (<LoadingSpinner/>)}
        </div>
    );
};

export default CountryDetails;
