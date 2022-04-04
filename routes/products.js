var express = require('express')
var router = express.Router()

router.get
(
    '/', (req,res) =>
    {
        res.send('GET Works.')
    }
)
router.get
(
    '/info/:id/:name', (req,res) =>
    {
        const productObj = 
        {
            prodID: req.params.id,
            prodName: req.params.name,
            status: true
        }
        res.send(productObj)
    }
)
router.get
(
    '/test/wildcard/*/mnop/var/endp', (req,res) =>
    {
        res.send("We are hitting it.")
    }
)
router.get
(
    '*', (req,res) =>
    {
        res.send('404: Product not found')
    }
)

module.exports = router