import mongoose from "mongoose";

const SpecialMentionSchema = new mongoose.Schema(
  {
    date:{
        type:String,
        required:true,
        unique:true,
    },

    title:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("SpecialMention", SpecialMentionSchema);
