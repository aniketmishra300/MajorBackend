const express = require('express')
const app = express()
const cors = require('cors')
const { connection } = require('./Config/db')
const  route  = require('./Route/Route')

app.use(cors({
    origin: "*"
}))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",route)


app.listen(5500,()=>{
    connection()
    console.log("server is running at 5500")
})