
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();


const requestPath = path.join(__dirname, 'build');

app.use(express.static(requestPath));

app.get('/*', function (req, res) {
  res.sendFile(path.join(requestPath, 'index.html'));
});

const PORT = process.env.PORT || 9000; 

app.listen(PORT,()=>{
  console.log("Server is Running on "+`http://localhost:${PORT}`);
}); 