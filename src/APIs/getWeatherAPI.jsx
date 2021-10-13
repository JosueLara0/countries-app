export const getWeatherAPI = async (capital) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=6ed17d9d66b2e6920e9fb0efba929c49`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};