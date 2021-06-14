const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at port 3000'));
app.use('/public', express.static('public'));
app.get('/test', async (request, response) => {
    const url = "https://newsapi.org/v2/everything?domains=bbc.co.uk&apiKey=e055443a32f0471398420ff3ca57bd4d";
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    console.log(json);
    response.json(json);
});
