import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },

    date:{
      type:String,
      required:true,
    }


  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);