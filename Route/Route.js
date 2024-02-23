const express = require('express')
const { addData, findAllData } = require('../Controller/Api')
const route = express.Router()


route.post("/addData",addData)
route.get("/findAllData",findAllData)




module.exports = route