import mongoose from "mongoose";

const PoliticsSchema = new mongoose.Schema(
  {
    img:{
        type:String,
        required:true,
        unique:true,
    },

    desc:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Politics", PoliticsSchema);
