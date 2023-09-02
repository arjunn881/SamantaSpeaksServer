import mongoose from "mongoose";

const DebateSpeakSchema = new mongoose.Schema(
  {
    date:{
        type:String,
        required:true,
        unique:true,
    },

    debate:{
        type:String,
        required:true,
    },
    debateType:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("DebateSpeak", DebateSpeakSchema);
