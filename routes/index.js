const express = require('express');
const router = express.Router()
const axios = require('axios');
const services = require('./services.json');

router.all('/:apiName/(*)', (req, res) => {
    const url = services.services[req.params.apiName].url
    console.log("API: " + req.params.apiName + ". Path to invoke: " + url + req.params[0])
    axios({
        method: req.method,
        url: url + req.params[0],
        //headers: req.headers,
        data: req.body
    }).then((response) => {
        res.send(response.data)
    }).catch(error => {
        res.send(error)
    })
})

module.exports = router