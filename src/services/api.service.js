'use strict'

exports = module.exports = ApiService

function ApiService() {}

var qcUserToken = JSON.parse(localStorage.getItem('qcUserToken') || '{}'
var config = {
  headers: {'X-My-Custom-Header': qcUserToken }
};

ApiService.get = function(url){
  return axios.get(url, config);
}

ApiService.post = function(url, data) {
  return axios.post(url, data, config);
}

ApiService.put = function(url, data) {
  return axios.put(url, data, config);
}

ApiService.delete = function(url) {
  return axios.delete(url, config);
}
