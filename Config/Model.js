const mongoose = require('mongoose');

const tourismSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    maintext: {
        type: String,
        required: true
    }
    
});

const LoginSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
})

const Tourism = mongoose.model('Tourism', tourismSchema);
const TourismLoginData = mongoose.model('LoginData', LoginSchema);


module.exports = {Tourism,TourismLoginData};