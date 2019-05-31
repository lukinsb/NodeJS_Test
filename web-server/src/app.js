const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))


app.get('/weather', (req, res)=> {

    res.send({
        Location: "São Paulo",
        Temperature: 23,
        Status: "Clear Sky",
        Latitude: -23.666465,
        Longitude: 46.131321,
        Rain_Probab: 0.23,

    })

})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})