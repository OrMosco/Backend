const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))


const port = 3000
app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`)
})
