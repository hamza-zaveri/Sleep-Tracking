const mongoose=require('mongoose')

// let connection=mongoose.connect('mongodb://localhost:27017/sleep_tracking_system')

let connection=mongoose.connect('mongodb+srv://pranav:g1XljKhAYSdgVlhA@pranav.qjesi.mongodb.net/sleep_tracking_system?retryWrites=true&w=majority')



if(connection){
    console.log('connected')
}

