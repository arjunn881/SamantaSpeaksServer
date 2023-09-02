import mongoose from "mongoose";

const SupplementaryQuestionsSchema = new mongoose.Schema(
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

    sessionNo:{
        type:Number,
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

export default mongoose.model("SupplementaryQuestions", SupplementaryQuestionsSchema);
