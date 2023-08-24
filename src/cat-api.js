import axios from "axios";

const API_KEY = "live_aJAcuBbgKlY2QhAdDgi00UDa7tOHNiG2417tHirx79buy9xqiMGB4tWahEwOhpye";
axios.defaults.headers.common["x-api-key"] = API_KEY;
const CAT_URL = "https://api.thecatapi.com/v1";

export function fetchBreeds() {
  return axios.get(`${CAT_URL}/breeds`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
export function fetchCatByBreed(breedId) {
  return axios.get(`${CAT_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      throw error;
    });
}