const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name : String,
    username :String,
    contact_number : Number,
    email:String,
    password:String,
    date_of_birth:Date,
    gender : String

});

module.exports=mongoose.model("users",userschema)

// {
//     "name":"pranav prajapati",
//     "username":"pranav._.9",
//     "contact_number": 9773135682,
//     "email":"pra9prajapati@gmail.com",
//     "password":"Pranav@123",
//     "date_of_birth":"2015-03-25T12:00:00Z",
//     "gender":"male"
// }