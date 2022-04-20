const express=require('express')

require('./conf');

const user=require('./signup.js');
const sleep_detail=require('./add_sleep_details.js');
const res = require('express/lib/response');

const app=express();

app.use(express.json())

// signup
app.post("/register",async(req,res)=>{
    let data=new user(req.body)
    let result=await data.save()
    res.send(result)
})


// login
app.post("/login",async(req,res)=>{
    let loggedin = await user.findOne(req.body).select("-password")

    if(req.body.username && req.body.password){
        if(loggedin){
            res.send(loggedin)
        }
        else{
            res.send('not found')
        }
    }
    else{
        res.send('enter proper credentials')
    }
   
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

