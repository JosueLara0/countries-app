// Libraries
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

// Components
import LoadingSpinner from '../components/LoadingSpinner';

// APIs
import {getCountriesAPI} from '../APIs/getCountriesAPI';

const CountryDetails = () => {
    const {country} = useParams();
    const [details, setDetails] = useState([]);

    // Get the details of one country from the API
    useEffect(() => {
        // Validar errores como en CountryPage, error con england
        const fetchDetailsAPI = async () => {
            const path = `name/${country}?fullText=true`;
            console.log(path);
            const response = await getCountriesAPI(path);
            setDetails(response[0]);
            console.log(response);
        };
        fetchDetailsAPI();
    }, [country]);

    return (
        <div style={{display: 'flex', justifyContent: "center",}}>
            {details.name ? (
                <Card style={{width: '20rem', marginTop: "2rem"}} bg="dark" text="white">
                    <Card.Img variant="top" src={details.flags.png} alt={details.name.common}/>
                    <Card.Body>
                        <Card.Title>{details.name.common}</Card.Title>
                        <Card.Text>Capital: {details.capital[0]}</Card.Text>
                        <Card.Text>Official name: {details.name.official}</Card.Text>
                        <Card.Text>Continent: {details.subregion}</Card.Text>
                    </Card.Body>
                    <Card.Body style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                        <Button variant="outline-light">
                            <Link to={`/`} style={{textDecoration: "none", color: "#e2bb4d"}}>Back Home</Link>
                        </Button>
                        <Button variant="outline-light">
                            <Link to={`/weather/${country}/${details.capital[0]}`}
                                  style={{textDecoration: "none", color: "#e2bb4d"}}>See Capital Weather</Link>
                        </Button>
                    </Card.Body>
                </Card>
            ) : (<LoadingSpinner/>)}
        </div>
    );
};

export default CountryDetails;
