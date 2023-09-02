import mongoose from "mongoose";

const ReportsSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      
    },

    name: {
      type: String,
      required: true,
      unique: true
    },

    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reports", ReportsSchema);
