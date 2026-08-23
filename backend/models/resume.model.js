import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    information :{
        type : String
    },
    extractedText : {
        type : String
    },
    skills :{
        type: [String]
    },
    jobRole : {
        type:String,
    }
},{
    timestamps: true
})


const resumeModel = mongoose.model('Resume',resumeSchema);

export default resumeModel;