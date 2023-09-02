import mongoose from "mongoose";

const DiscussionOnGovtSchema = new mongoose.Schema(
  {
    date:{
        type:String,
        required:true,
        unique:true,
    },
    debateType:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("DiscussionOnGovt", DiscussionOnGovtSchema);
