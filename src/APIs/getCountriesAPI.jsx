export const getCountriesAPI = async (path) => {
    const url = `https://restcountries.com/v3.1/${path}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
