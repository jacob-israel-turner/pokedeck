const express = require('express')

const app = express()

const port = 9001


app.use(express.static(__dirname + '/public'))

app.listen(port, (e) => {
  if (e) return console.error(e)
  console.log(`Now listening on port: ${port}`)
})
