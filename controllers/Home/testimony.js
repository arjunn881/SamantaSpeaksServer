import Testimony from "../../models/Home/Testimony.js";

export const AddTestimony = async (req, res) => {
  const newTestimony = new Testimony(req.body);

  try {
    const savedTestimony = await newTestimony.save();
    res.status(200).json(savedTestimony);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTestimony = async (req, res) => {
  try {
    const updatedTestimony = await Testimony.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedTestimony);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTestimony = async (req, res) => {
  try {
    await Testimony.findByIdAndDelete(req.params.id);
    res.status(200).json("Testimony has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTestimony = async (req, res) => {
  try {
    const testimony = await Testimony.findById(req.params.id);

    res.status(200).json(testimony);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllTestimony = async (req, res) => {
  try {
    const allTestimony = await Testimony.find();
    res.status(200).json(allTestimony);
  } catch (error) {
    res.status(500).json(error);
  }
};
