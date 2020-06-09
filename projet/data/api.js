import axios from 'axios';

export default async function getData() {
    try {
        console.log('hello api')
        return await axios.get("https://api.covid19api.com/summary ");
    } catch (error) {
        console.error(error);
    }
}