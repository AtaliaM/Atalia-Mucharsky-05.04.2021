import axios from 'axios';

//API KEY = "CicQVGfqVfoy6AJBEauazxIatO1s3YCD"

export default axios.create({
    baseURL: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`
  });