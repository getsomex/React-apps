import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6NSMi4TOUC_tMwP3WUdZhlLsfVhf77qQfULXYOFfiLg'
  }
});
