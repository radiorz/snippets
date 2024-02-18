// 后端 wss
import { WebSocketServer } from 'ws'
const port = 9876
const client = new WebSocketServer({
  port
})
client.on('connection', (socket) => {
  socket.on('message', (buffer) => {
    console.log(`message:`, buffer.toString())
  })
  socket.send('your are connected')
})
client.on('listening', () => {
  console.log(`server is on!`)
})
client.on('close', () => {
  console.log(`server is closed!`)
})
client.on('error', (error) => {
  console.log(`server is error!`, error)
})
