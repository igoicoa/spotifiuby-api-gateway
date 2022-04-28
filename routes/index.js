const express = require('express');
const router = express.Router()
const axios = require('axios');
const registry = require('./registry.json');

router.all('/:apiName/:path', (req, res) => {
    const url = registry.services[req.params.apiName].url
    console.log("API: " + req.params.apiName + ". Path to invoke: " + url + req.params.path)
    axios({
        method: req.method,
        url: url + req.params.path,
        headers: req.headers,
        data: req.body
    }).then((response) => {
        res.send(response.data)
    }).catch(error => {
        res.send(error)
    })
})

router.all('/:apiName/:path/:id', (req, res) => {
    const url = registry.services[req.params.apiName].url
    console.log("API: " + req.params.apiName + ". Path to invoke: " + url + req.params.path + '/' + req.params.id,)
    axios({
        method: req.method,
        url: url + req.params.path + '/' + req.params.id,
        headers: req.headers,
        data: req.body
    }).then((response) => {
        res.send(response.data)
    }).catch(error => {
        res.send(error)
    })
})

module.exports = router