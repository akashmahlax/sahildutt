const express = require('express');
const server = express();

server.get('/', (req, res) =>{
    res.send('hello i am sahil dutt , my backend is still in working develped by akash ')
});

server.listen(3002);
