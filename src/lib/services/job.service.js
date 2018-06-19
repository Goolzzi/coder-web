import axios from 'axios';
import Utils from '../utils'

export default class JobService {}

const base_url = `${process.env.REACT_APP_API_URL}:${Utils.getPort()}`

JobService.getJobs = () => {
  return axios(`${base_url}/v1/jobs`)
}

JobService.searchJobs = (keywords, location) => {
  return axios(`${base_url}/v1/search?type=jobs&keywords=${keywords}&locations=${location}`)
}
