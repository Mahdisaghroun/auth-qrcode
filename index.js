const app =require('express')();
const cors= require('cors')

app.use(require('express').json())
app.use(cors())
const server=require('http').createServer(app)
const io = require("socket.io")(server);
const socket= require("socket.io-client");


app.get('/:id',(req,res)=>{
var  s= socket('http://localhost:4000')
io.emit("receiveToken")

})
io.on('connection',(socket)=>{
console.log("User connected")
socket.on('token',(token)=>{
  socket.emit("receive-token",token)
    console.log(token)
})
})

server.listen(4000,()=>{
  console.log('Listen to 4000')  
})
