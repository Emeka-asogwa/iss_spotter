const request = require('request');

const fetchMyIP = function(callback) {
  const url = `https://api.ipify.org?format=json`;
  // const ipAddress = JSON.parse();

  request(url,(error, response, body) => {
    if (error) {
      console.log('This is the error', error);
      return callback(error, null);
  
      // console.log(ipAddress);

    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // else{
    console.log(`This is the JASON body`, JSON.parse(body));
    let ip = JSON.parse(body).ip;

    return callback(null, ip);
    // console.log(ipAddress);
    // }
  });
};


module.exports = { fetchMyIP };