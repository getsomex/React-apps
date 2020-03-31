import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-burger-builder-251dd.firebaseio.com/'
});

export default instance;