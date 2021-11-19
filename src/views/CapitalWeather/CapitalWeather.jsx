// Libraries
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

// APIs
import { getWeatherAPI } from "../../Hooks/getWeatherAPI";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// Styles
import "./CapitalWeather.styles.css";

const CapitalWeather = () => {
  const { country, capital } = useParams();
  const [capitalWeather, setCapitalWeather] = useState(null);

  // Get the weather of the capital from the API
  useEffect(() => {
    const fetchWeatherAPI = async () => {
      const response = await getWeatherAPI(capital);
      setCapitalWeather(response);
    };
    fetchWeatherAPI();
  }, [capital]);

  return (
    <div className="container-weather">
      {capitalWeather ? (
        <Card className="weather-card" bg="dark" text="white">
          <Card.Body>
            <Card.Img
              variant="top"
              src={`https://openweathermap.org/img/w/${capitalWeather.weather[0].icon}.png`}
              alt={capital}
            />
            <Card.Title>{capital} Weather</Card.Title>
            <Card.Text>
              Weather: {capitalWeather.weather[0].description}
            </Card.Text>
            <Card.Text>Wind speed: {capitalWeather.wind.speed} m/s</Card.Text>
            <Card.Text>Pressure: {capitalWeather.main.pressure} hPa</Card.Text>
            <Card.Text>Humidity: {capitalWeather.main.humidity} %</Card.Text>
            <Card.Text>Temperature: {capitalWeather.main.temp} °F</Card.Text>
          </Card.Body>
          <Card.Body className="buttons-card">
            <Button variant="outline-light">
              <Link to={`/`}>Back Home</Link>
            </Button>
            <Button variant="outline-light">
              <Link to={`/details/${country}`}>Back Country Details</Link>
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default CapitalWeather;
