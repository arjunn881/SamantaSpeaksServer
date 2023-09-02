import mongoose from "mongoose";


const AwardsSchema = new mongoose.Schema(
  {

    img: {
        type: String,
        required: true,
  
      },
    desc: {
      type: String,
      required: true,

    },

  },
  { timestamps: true }
);

export default mongoose.model("Awards", AwardsSchema);