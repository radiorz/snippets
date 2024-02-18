// 前端 wss
import { WebSocketServer } from 'ws'
const port = 9876
const wss = new WebSocketServer({
  port
})
wss.on('connection', (socket) => {
  socket.on('message', (buffer) => {
    console.log(`message:`, buffer.toString())
  })
  socket.send('your are connected')
})
wss.on('listening',()=>{
  console.log(`server is on!`,)
})

