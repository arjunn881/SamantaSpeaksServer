import CommitteeMembership from "../../models/Politics/CommitteeMembership.js";


export const AddCommitteeMembership = async (req, res) => {
    const newCommitteeMembership = new CommitteeMembership(req.body);
  
    try {
      const savedCommitteeMembership = await newCommitteeMembership.save();
      res.status(200).json(savedCommitteeMembership);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const updateCommitteeMembership = async (req, res) => {
    try {
      const updatedCommitteeMembership = await CommitteeMembership.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json(updatedCommitteeMembership);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const deleteCommitteeMembership = async (req, res) => {
    try {
      await CommitteeMembership.findByIdAndDelete(req.params.id);
      res.status(200).json("CommitteeMembership has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getCommitteeMembership = async (req, res) => {
    try {
      const committeeMembership = await CommitteeMembership.findById(req.params.id);
  
      res.status(200).json(committeeMembership);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getAllCommitteeMembership = async (req, res) => {
    try {
      const allCommitteeMembership = await CommitteeMembership.find();
      res.status(200).json(allCommitteeMembership);
    } catch (error) {
      res.status(500).json(error);
    }
  };