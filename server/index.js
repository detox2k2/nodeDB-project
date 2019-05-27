const express = require('express')
const app = express()
const memeController = require('./controllers/memeController')

app.use(express.json());

const url = '/api/memes'

app.get(url, memeController.getMemes );
app.post(url, memeController.addMeme);
app.put(`${url}/:caption`, memeController.editMeme);
app.delete(`${url}/:caption`, memeController.deleteMeme)

const SERVER_PORT = 5058;
app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
});