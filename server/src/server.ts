import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.send('teste')
})

app.listen(3333);