import Memberships from "../../models/AwardsNRecognition/Memberships.js";


export const AddMemberships = async (req, res) => {
  const newMemberships = new Memberships(req.body);

  try {
    const savedMemberships = await newMemberships.save();
    res.status(200).json(savedMemberships);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateMemberships = async (req, res) => {
  try {
    const updatedMemberships = await Memberships.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedMemberships);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteMemberships = async (req, res) => {
  try {
    await Memberships.findByIdAndDelete(req.params.id);
    res.status(200).json("Memberships has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMemberships = async (req, res) => {
  try {
    const memberships = await Memberships.findById(req.params.id);

    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllMemberships = async (req, res) => {
  try {
    const allMemberships = await Memberships.find();
    res.status(200).json(allMemberships);
  } catch (error) {
    res.status(500).json(error);
  }
};
