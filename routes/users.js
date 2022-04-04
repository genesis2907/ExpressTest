var express = require('express')
const { contentType } = require('express/lib/response')
var router = express.Router()

router.use
(
    '/', (req, res, next) =>
    {
        req.headers['content-type'] = 'application/json'
        console.log("Middleware called at " + Date.now())
        next();
    }
)

router.get
(
    '/', (req, res, next) =>
    {
        res.send('Header Type ' + req.headers['content-type'])
        res.send('Followed by User endpoint')
        next()
    }
)

router.use
(
    '/', (req, res) =>
    {
        console.log('Ended')
    }
)

router.get
(
    '/static', (req,res) =>
    {
        res.send('Static Works.')
    }
)
router.get
(
    '/dynamic/:id([0-9]{5})/:first/:last', (req,res) =>
    {
        const userObj = 
        {
            idUser: req.params.id,
            fName: req.params.first,
            lName: req.params.last,
            status: true
        }
        res.send(userObj)
    }
)
router.get
(
    '*', (req,res) =>
    {
        res.send('404: User not found')
    }
)

module.exports = router