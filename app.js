// Require Express
const express = require('express');
const morgan = require('morgan');

const logger = morgan('tiny'); // returns a logger function

// Express server handling requests and responses
const app = express();

// Middleware
app.use(logger);
app.use(express.static('public')); // Triggered by GET requests on base endpoint /*.ext

app.use((request, response, next) => {
  console.log('CUSTOM MIDDLEWARE -> VACA');

  next();
});

// our first Route:
app.get('/', (request, response, next) => {
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
