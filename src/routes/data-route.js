
const express = require('express')
const router = express();
const fs = require('fs')
const responese = require('../../data.json')

router.get('/dashboard/person/2024-05-31', (req, res, next) => {
    try {

        // const responese = fs.readFileSync('')

        res.json({ responese })
    }catch(err){
        next(err)
        console.log(err)
    }
})

module.exports = router