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
    '/invoice/:id/:nameUser', (req,res) =>
    {
        const orderObj = 
        {
            idOrder: req.params.id,
            userName: req.params.nameUser,
            amt: 15000,
            status: true
        }
        res.send(orderObj)
    }
)
router.get
(
    '*', (req,res) =>
    {
        res.send('404: Order not found')
    }
)

module.exports = router