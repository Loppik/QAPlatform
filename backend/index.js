const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});

app.get('/signin', (request, response) =>{
  console.log(request.data);
  response.send("ok");
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});