var express = require('express')
var app = express()

var users = require('./routes/users')
app.use('/users', users)

var products = require('./routes/products')
app.use('/products', products)

var orders = require('./routes/orders')
app.use('/orders', orders)

app.get
 ('/', (req,res) => 
    {
        res.send('This is "index.js" endpoint')
    }
)

app.get
 ('/*', (req,res) => 
    {
        res.send('404: URL not found.')
    }
)

setTimeout
(
    function() 
    {
        console.log('Please wait...')
    }, 
    1000
)
app.listen(20020)
setTimeout
(
    function() 
    {
        console.log('Listening on port 20020...')
    }, 
    5000
)