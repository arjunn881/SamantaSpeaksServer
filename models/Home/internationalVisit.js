import mongoose from "mongoose";

const InternationalVisitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true

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

export default mongoose.model("InternationalVisit", InternationalVisitSchema);