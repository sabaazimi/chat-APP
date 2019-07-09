const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socket = require('socket.io');

let server = http.createServer(app);
let io = socket(server);  




const publicPath = path.join(__dirname , '/../public');
app.use(express.static(publicPath));


io.on("connection", (socket) => {
    console.log('new user is connected....');
    socket.on('disconnect' , () => {
        console.log('user is disconnected....');
    })
})




const port = process.env.PORT || 3000 ;
server.listen(port, () => {
    console.log(`listening to port ${port}`);
})
