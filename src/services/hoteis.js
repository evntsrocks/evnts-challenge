import axios from 'axios';

function get() {
  return axios.get('http://eng.evnts.rocks/hotels').then(res => res);
}

export default {
  get: get()
}
