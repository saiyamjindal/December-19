// server side 
const express = require('express');
// express server
const app = express();
//  nodejs 
const server = require('http').Server(app);
// nodejs => socket enabled
const path = require("path");
const io = require('socket.io')(server);
// serve static assets to client
app.use(express.static("public"));

io.on('connection', function (socket) {
    socket.on("color", function (color) {
        console.log(color);
        socket.broadcast.emit('oncolorChange', color);
    })
    socket.on("mousedown",function(point){
        socket.broadcast.emit("onmousedown",point);
    })
    socket.on("mousemove",function(point){
        socket.broadcast.emit("onmousemove",point);
    })

});
// app.get("/home",function(req,res){
//     res.sendFile(path.join(__dirname,"home.html"));
// })
// nodejs server

server.listen(3000, function (req, res) {
    console.log("Server has started at port 3000");
});