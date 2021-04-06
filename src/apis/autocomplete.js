import axios from 'axios';

//API KEY = "CicQVGfqVfoy6AJBEauazxIatO1s3YCD"

export default axios.create({
    baseURL: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`
  });