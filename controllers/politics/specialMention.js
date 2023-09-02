import SpecialMention from "../../models/Politics/SpecialMention.js";

export const AddSpecialMention = async (req, res) => {
  const newSpecialMention = new SpecialMention(req.body);

  try {
    const savedSpecialMention = await newSpecialMention.save();
    res.status(200).json(savedSpecialMention);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateSpecialMention = async (req, res) => {
  try {
    const updatedSpecialMention = await SpecialMention.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedSpecialMention);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteSpecialMention = async (req, res) => {
  try {
    await SpecialMention.findByIdAndDelete(req.params.id);
    res.status(200).json("SpecialMention has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSpecialMention = async (req, res) => {
  try {
    const specialMention = await SpecialMention.findById(req.params.id);

    res.status(200).json(specialMention);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllSpecialMention = async (req, res) => {
  try {
    const allSpecialMention = await SpecialMention.find();
    res.status(200).json(allSpecialMention);
  } catch (error) {
    res.status(500).json(error);
  }
};
