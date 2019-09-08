const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const redis = require('redis');
const connectionCache = require('./middleware/connectionCache');

const server = express();


server.use(cors());
server.use(express.json());
server.use(connectionCache(redis.createClient({"host":"192.168.99.100","port":"6379"})));
server.use(routes);
server.listen(3332);