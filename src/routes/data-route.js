
const express = require('express')
const router = express();
const responese = require('../../data.json')

router.get('/dashboard/person/2024-05-31', (req, res, next) => {
    try {
        res.json({ responese })
        console.log({ data: "success!" })
    }catch(err){
        next(err)
        console.log(err)
    }
})

module.exports = router