import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,

    },

    desc: {
      type: String,
      required: true,

    },

    img: {
      type: String,
      required: true,

    },
  },
  { timestamps: true }
);

export default mongoose.model("Testimony", TestimonySchema);
