const {Tourism, TourismLoginData} = require("../Config/Model")
const data = require("../data")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { userDetails } = require('../Config/Model');


const addData = async(req,res)=>{
    const dbData = await Tourism.create(data)
     res.send(dbData)
     console.log("added")
 }


 
const findAllData = async(req,res)=>{
    const data = await Tourism.find({})
    res.send(data)
}


const saltRound = 10;
const secretkey = "mishra"

const register = async (req, res) => {
    const data = req.body
    // console.log(data)
    const account = await TourismLoginData.findOne({email:data.email})


    if (account) {
        res.send({msg:"email is already exist"})
    } else {
        const hashed = await bcrypt.hashSync(data.password, saltRound)
        data.password = hashed

        TourismLoginData.create(data) 

        const token = jwt.sign({ user: data.email }, secretkey) // jwt generation
        res.send({ msg: "User registered successfully", token: token })
    }
}


const login = async (req, res) => {
    const loginData = req.body;
    console.log(loginData);
    const account = await TourismLoginData.findOne({email:loginData.email})
    console.log(account)
    if (!account) {
        res.send("User is not Registered")
    } else {
        const login = await bcrypt.compare(loginData.password,account.password)
        console.log(login);
        if (login) {
            const token = jwt.sign({ user: loginData.email }, secretkey)
            res.send({ msg: "User logged in successfully", token: token })
        } else {
            res.send("Password is incorrect!")
        }
    }
}


 module.exports= {addData,findAllData, register, login}