// Libraries
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Card} from 'react-bootstrap';

// APIs
import {getWeatherAPI} from '../APIs/getWeatherAPI';
import LoadingSpinner from '../components/LoadingSpinner';

const CapitalWeather = () => {
    const {country, capital} = useParams();
    const [capitalWeather, setCapitalWeather] = useState(null);

    // Get the weather of the capital from the API
    useEffect(() => {
        const fetchWeatherAPI = async () => {
            const response = await getWeatherAPI(capital);
            setCapitalWeather(response);
            console.log(response);
        };
        fetchWeatherAPI();
    }, [capital]);


    return (
        <div style={{display:'flex', justifyContent:"center", marginTop:"2rem"} }>
            {capitalWeather ? (
                <Card style={{width: '20rem'}} bg="dark" text="white">
                    <Card.Body>
                        <Card.Img variant="top"
                                  src={`https://openweathermap.org/img/w/${capitalWeather.weather[0].icon}.png`}
                                  alt=""
                                  style={{height: '10rem'}}/>
                        <Card.Title>{capital} Weather</Card.Title>
                        <Card.Text>Weather: {capitalWeather.weather[0].description}</Card.Text>
                        <Card.Text>Wind speed: {capitalWeather.wind.speed} m/s</Card.Text>
                        <Card.Text>Pressure: {capitalWeather.main.pressure} hPa</Card.Text>
                        <Card.Text>Humidity: {capitalWeather.main.humidity} %</Card.Text>
                        <Card.Text>Temperature: {capitalWeather.main.temp} °F</Card.Text>
                    </Card.Body>
                    <Card.Body style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                        <Button variant="outline-light">
                            <Link to={`/`} style={{textDecoration:"none", color:"#e2bb4d"}}>Back Home</Link>
                        </Button>
                        <Button variant="outline-light">
                            <Link to={`/details/${country}`} style={{textDecoration:"none", color:"#e2bb4d"}}>Back Country Details</Link>
                        </Button>
                    </Card.Body>
                </Card>
            ) : <LoadingSpinner/>
            }
        </div>
    );

};

export default CapitalWeather;