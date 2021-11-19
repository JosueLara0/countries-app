export const getWeatherAPI = async (capital) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
