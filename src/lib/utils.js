import axios from 'axios';

export default class Utils {}

Utils.getCurrentUser = () => {
  const user = localStorage.getItem('qcUser')
  if (user) {
    return JSON.parse(localStorage.getItem('qcUser'));
  } else {
    return null;
  }
}

Utils.isSignIn = () => {
  return localStorage.getItem('qcUserToken') !== null;
}

Utils.signIn = (email, password) => {
  let base_url = `${process.env.REACT_APP_API_URL}:${this.getPort()}`
  let url = `${base_url}/v1/sign_in`
  let data = { user: { email: email, password: password } }
  axios.post(url, data)
    .then((response) => {
      this.setState({ user: response.data.user });
      // set user token
      localStorage.setItem('qcUserToken', JSON.stringify(response.data.token))
      localStorage.setItem('qcUser', JSON.stringify(response.data.user))
      this.props.route.history.push('/jobs')
    })
    .catch((error) => {
      console.log(error);
    })
}

Utils.getSearchUrl = (keywords, location) => {
  let url = '/jobs'
  if (keywords || location) {
    url += '?'
    if (keywords) { url += `keywords=${keywords}` }
    if (keywords && location) { url += '&' }
    if (location && location !== '' ) { url += `location=${location}`}
    console.log(url)
  }
  return url
}

Utils.getPort = () => {
  return process.env.PORT || process.env.REACT_APP_API_PORT;
}
