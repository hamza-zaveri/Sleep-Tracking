const express=require('express')
const cors=require("cors");
require('./conf');

const user=require('./signup.js');
const sleep_detail=require('./add_sleep_details.js');
const res = require('express/lib/response');

const app=express();

app.use(express.json())
app.use(cors());
// signup
// app.post("/register",async(req,res)=>{
//     let data=new user(req.body)
//     let result=await data.save()
//     res.send(result)
// })
app.post("/register", (req, res)=> {
    const { name, username, email,phoneNo,dob,password,reEnterPassword} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                username,
                email,
                phoneNo,
                dob,
                password,
                reEnterPassword
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})


// login
// app.post("/login",async(req,res)=>{
//     let loggedin = await user.findOne(req.body).select("-password")

//     if(req.body.username && req.body.password){
//         if(loggedin){
//             res.send(loggedin)
//         }
//         else{
//             res.send('not found')
//         }
//     }
//     else{
//         res.send('enter proper credentials')
//     }
   
// })
app.post("/login", (req, res)=> {
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

// add sleep data
app.post("/add_sleep_details",async(req,res)=>{
    let sleep_data=new sleep_detail(req.body)
    let sleep_data_result=await sleep_data.save()
    res.send(sleep_data_result)
})

// edit profile
app.put("/edit_profile/:user",async(req,res)=>{
    let edit_data=await user.updateOne( 
        {username: req.params.user},
        {
            $set : req.body
        }
        )

    res.send(edit_data)
})

app.listen(5000);











































// const connectDB=async()=>{
   
    
//     const user=mongoose.model('users',userschema)

//     const data=await user.find();

//     console.warn(data)
// }

// connectDB();

// app.get("/",(req,res)=>{
//     res.send('aeeee suruchi it is working............')
// })

