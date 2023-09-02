import InternationalVisit from "../../models/Home/internationalVisit.js";

export const AddInternationalVisit = async (req, res) => {
    const newInternationalVisit = new InternationalVisit(req.body);
  
    try {
      const savedInternationalVisit = await newInternationalVisit.save();
      res.status(200).json(savedInternationalVisit);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  export const updateInternationalVisit = async (req, res) => {
    try {
      const updatedInternationalVisit = await InternationalVisit.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json(updatedInternationalVisit);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  
  export const deleteInternationalVisit = async (req, res) => {
    try {
      await InternationalVisit.findByIdAndDelete(req.params.id);
      res.status(200).json("InternationalVisit has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getInternationalVisit = async (req, res) => {
    try {
      const internationalVisit = await InternationalVisit.findById(req.params.id);
  
      res.status(200).json(internationalVisit);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  
  export const getAllInternationalVisit = async (req, res) => {
      try {
         const allInternationalVisits = await InternationalVisit.find();
  
        res.status(200).json(allInternationalVisits);
  
      } catch (error) {
        res.status(500).json(error);
      }
  };