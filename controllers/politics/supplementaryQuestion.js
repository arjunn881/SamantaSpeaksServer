import SupplementaryQuestion from "../../models/Politics/SupplementaryQuestion.js";


export const AddSupplementaryQuestion = async (req, res) => {
    const newSupplementaryQuestion = new SupplementaryQuestion(req.body);
  
    try {
      const savedSupplementaryQuestion = await newSupplementaryQuestion.save();
      res.status(200).json(savedSupplementaryQuestion);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const updateSupplementaryQuestion = async (req, res) => {
    try {
      const updatedSupplementaryQuestion = await SupplementaryQuestion.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json(updatedSupplementaryQuestion);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const deleteSupplementaryQuestion = async (req, res) => {
    try {
      await SupplementaryQuestion.findByIdAndDelete(req.params.id);
      res.status(200).json("SupplementaryQuestion has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getSupplementaryQuestion = async (req, res) => {
    try {
      const supplementaryQuestion = await SupplementaryQuestion.findById(req.params.id);
  
      res.status(200).json(supplementaryQuestion);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getAllSupplementaryQuestion = async (req, res) => {
    try {
      const allSupplementaryQuestion = await SupplementaryQuestion.find();
      res.status(200).json(allSupplementaryQuestion);
    } catch (error) {
      res.status(500).json(error);
    }
  };