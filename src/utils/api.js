import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";


const headers = {
    Authorization: "bearer " 
};


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });

        console.log(`data of This url ${url} is --> ${data}`);
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
};