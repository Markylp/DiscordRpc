///////////////////////////
// Vinay Kumar:- V𝕀ꋊΛꌦ#0587
// https://discord.gg/c2MyY4WMQv
// https://www.youtube.com/@Tutorial-City-sg2fp
///////////////////////////

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`NOW GO TO ANY UPTIME APP and paste this link`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

///////////////////////////
// Vinay Kumar:- V𝕀ꋊΛꌦ#0587
// https://discord.gg/c2MyY4WMQv
// https://www.youtube.com/@Tutorial-City-sg2fp
///////////////////////////