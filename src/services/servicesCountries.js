import axios from "axios";

const url = "https://restcountries.com/v3.1";

const servicesCountries = () => {
    const request = axios.get(`${url}/all`);
    return request.then(response => response.data);
}

const getCountry = (name) => {
    const request = axios.get(`${url}/name/${name}`);
    return request.then(response => response.data);
}

export default {
    getCountries: servicesCountries,
    getCountry: getCountry
}