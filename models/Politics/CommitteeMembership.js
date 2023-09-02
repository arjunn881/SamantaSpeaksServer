import mongoose from "mongoose";

const CommitteeMembershipSchema = new mongoose.Schema(
  {
    parliamentaryCommittee:{
        type:String,
        required:true,
        unique:true,
    },

    status:{
        type:String,
        required:true,
    },
    date : {
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("CommitteeMembership", CommitteeMembershipSchema);