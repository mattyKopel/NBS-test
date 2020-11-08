const http = require('http');
const url = require('url');
const params = require('../params')


function buildOptions(m_host, m_path, m_method, m_useQuerystring, m_qs) {
  const options = {
      host: m_host,
      path:m_path,
      method: m_method,
      useQuerystring: m_useQuerystring,
      qs: m_qs
  }
  return options;
}

function appendURL(origin, destination) {

  return '?origin=' + origin + '&destination=' + destination + '&key=' + params[APIKey];
}

const getDistanceMatrix = async(origin, destination) => {

  const options = buildOptions(params[googleHost], 'maps/api/distancematrix/json', 'GET', true, appendURL(origin, destination));

  const req = await http.request(options,  res => {//TODO
      console.log(`statusCode: ${res.statusCode}`);
      if(res.status == 'OK'){
        console.log('ok');
        return res;
      }
  });
  req.end();
}


const geocodeAddress = async (address) => {

const options = buildOptions(params[googleHost],'maps/api/geocode/json', 'GET', true,'?address=' + address +'&key=' + params[APIKey] );

const req = await http.request(options,  res => {//TODO
  console.log(`statusCode: ${res.statusCode}`);
    if(res.status == 'OK'){
      console.log('ok');
        return res;
    }
    else{//to remove...
      return res;
    }
  });
  req.end();
}

module.exports = { getDistanceMatrix, geocodeAddress };
