
const express = require('express');
const app = express();
const fs = require('fs')



app.get('/', (req, res) => {
    fs.readFile('./TP05/BookShop.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(data);
    })
})//import file render

app.get('/detail', (req, res) => {
    fs.readFile('./TP05/details/fetchapi-detail.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(data);
    })
})



app.listen(3001, () => {
    console.log("http://localhost:3001/");
})//connect and open in browser