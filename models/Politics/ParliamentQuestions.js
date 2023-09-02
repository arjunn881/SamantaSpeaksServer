import mongoose from "mongoose";

const ParliamentQuestionsSchema = new mongoose.Schema(
  {
    qNo:{
        type:Number,
        required:true,
        unique:true,
    },

    date:{
        type:String,
        required:true,
    },

    qType:{
        type:String,
        required:true,
    },

    ministry:{
        type:String,
        required:true,
    },

    subject:{
        type:String,
        required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ParliamentQuestions", ParliamentQuestionsSchema);
