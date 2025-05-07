const express = require('express')
const app = express()
const PORT = 80

const message = 'Hello World'

app.get('/sayHello', (req, res) => {
  res.json({ message })
})
//port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
