const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, '..')));

app.use('/website', express.static(path.join(__dirname + '/assets')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../..', 'index.html'));
// });

app.use((req, res) => {
  res.status(404);
  res.send('<h1>Error 404: resource not found</h1>');
})

app.listen(3000, () => {
  console.log("app listening on port 3000");
})

