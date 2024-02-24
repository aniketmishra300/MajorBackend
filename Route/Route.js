const express = require('express')
const { addData, findAllData, login, register } = require('../Controller/Api')
const route = express.Router()


route.post("/addData",addData)
route.get("/findAllData",findAllData)
route.post("/register",register)
route.post("/login",login)




module.exports = route