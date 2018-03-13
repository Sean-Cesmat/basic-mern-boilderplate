const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/basic-mern-boilerplate');

const PORT = process.env.PORT || 3000;

// Serve our static assets
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('/api', (req, res) => {
  res.send("You hit the API endpoint")
})

// THIS IS A WILDCARD AND WILL HIT ALL ROUTES
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
