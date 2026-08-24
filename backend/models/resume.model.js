import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    resume : { // resumeUrl
        type : String
    },
    extractedText : {
        type : String
    }
},{
    timestamps: true
})


const resumeModel = mongoose.model('Resume',resumeSchema);

export default resumeModel;