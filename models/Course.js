import mongoose from "mongoose";
const schema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter a title"],
        minLength:[4,"title must be at least 4 characters"],
        maxLength:[20,"title can't exceed 20 characters"]
    },
    description:{
        type:String,
        required:[true,"please enter a description"],
        minLength:[4,"description must be at least 4 characters"],
       
    },
    lectures:[{
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        video:{
            public_id:{
                type: String,
                required: true,
                
                
            },
            url:{
                type: String,
                required: true
            }
        },

    },
],
poster:{
    public_id:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
},
views:{
    type:Number,
    default:0
},
numOfVideos:{
    type:Number,
    default:0
},
category:{
    type:String,
    required:true,
},
createdBy:{
    type:String,
    required:[true,"Enter course creater name"],
},
createdAt:{
    type:Date,
    default:Date.now,
    
},


});

export const Course= mongoose.model("Course",schema);