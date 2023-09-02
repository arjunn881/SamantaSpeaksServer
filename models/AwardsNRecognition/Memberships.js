import mongoose from "mongoose";


const MembershipsSchema = new mongoose.Schema(
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

export default mongoose.model("Memberships", MembershipsSchema);
