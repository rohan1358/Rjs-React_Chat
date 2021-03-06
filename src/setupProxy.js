const { createProxyMiddleware } = require('http-proxy-middleware');
const proxys = require('http-proxy-middleware');
const express = require('express')
const cors = require('cors')
const connect = require('connect')
const url = require('url')
const proxy = require('proxy-middleware');
const appConnect = connect()

const app = express()
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
module.exports = function() {

    app.use('/proxy', createProxyMiddleware({
        pathRewrite: {
            '^/proxy': '/'
        },
        target: 'http://jsonplaceholder.typicode.com',
        secure: false,
        changeOrigin: true,
        ws: true,
    }))


}