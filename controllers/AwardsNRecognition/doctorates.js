import Doctorates from "../../models/AwardsNRecognition/Doctorates.js";


export const AddDoctorates = async (req, res) => {
  const newDoctorates = new Doctorates(req.body);

  try {
    const savedDoctorates = await newDoctorates.save();
    res.status(200).json(savedDoctorates);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDoctorates = async (req, res) => {
  try {
    const updatedDoctorates = await Doctorates.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedDoctorates);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDoctorates = async (req, res) => {
  try {
    await Doctorates.findByIdAndDelete(req.params.id);
    res.status(200).json("Doctorates has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDoctorates = async (req, res) => {
  try {
    const doctorates = await Doctorates.findById(req.params.id);

    res.status(200).json(doctorates);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllDoctorates = async (req, res) => {
  try {
    const allDoctorates = await Doctorates.find();
    res.status(200).json(allDoctorates);
  } catch (error) {
    res.status(500).json(error);
  }
};
