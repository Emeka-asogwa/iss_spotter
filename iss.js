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


const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
  });
};


module.exports = { fetchCoordsByIP,fetchMyIP };

