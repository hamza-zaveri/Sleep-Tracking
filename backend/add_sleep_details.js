const mongoose=require('mongoose');

const sleepdetailsschema=new mongoose.Schema({
    username:String,
    title : String,
    date :{
        type :Date,
        default:Date.now
    },
    sleeping_time : String,
    wakingup_time : String,
});

module.exports=mongoose.model("Sleep_detail",sleepdetailsschema)

// {
//     "username":"pranav._.9",
//     "title":"evening nap",
//     "sleeping_time":"5:30",
//     "wakingup_time":"17:20"
// }