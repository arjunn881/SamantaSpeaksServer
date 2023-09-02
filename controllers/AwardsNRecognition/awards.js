import Awards from "../../models/AwardsNRecognition/Awards.js";

export const AddAwards = async (req, res) => {
  const newAwards = new Awards(req.body);

  try {
    const savedAwards = await newAwards.save();
    res.status(200).json(savedAwards);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAwards = async (req, res) => {
  try {
    const updatedAwards = await Awards.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedAwards);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAwards = async (req, res) => {
  try {
    await Awards.findByIdAndDelete(req.params.id);
    res.status(200).json("Awards has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAwards = async (req, res) => {
  try {
    const awards = await Awards.findById(req.params.id);

    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllAwards = async (req, res) => {
  try {
    const allAwards = await Awards.find();
    res.status(200).json(allAwards);
  } catch (error) {
    res.status(500).json(error);
  }
};
