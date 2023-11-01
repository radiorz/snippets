import express from 'express'
const app = express()

// your beautiful code...
app.route('/').get((req, res) => {
  res.send('Hello World!')
})
app.listen(2333, () => {
  console.log(`Example app listening on port ${port}`)
})
