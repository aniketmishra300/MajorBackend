const Tourism = require("../Config/Model")
const data = require("../data")


const addData = async(req,res)=>{
    const dbData = await Tourism.create(data)
     res.send(dbData)
     console.log("added")
 }


 
const findAllData = async(req,res)=>{
    const data = await Tourism.find({})
    res.send(data)
}


 module.exports= {addData,findAllData}