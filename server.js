const express = require('express');

const PORT = process.env.PORT || 5150;
const app = express();



app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log('API server now listening on ${PORT}');
});