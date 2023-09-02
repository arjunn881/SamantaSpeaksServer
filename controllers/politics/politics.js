import Politics from "../../models/Politics/Politics.js";

export const AddPolitics = async (req, res) => {
  const newPolitics = new Politics(req.body);

  try {
    const savedPolitics = await newPolitics.save();
    res.status(200).json(savedPolitics);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePolitics = async (req, res) => {
  try {
    const updatedPolitics = await Politics.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPolitics);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePolitics = async (req, res) => {
  try {
    await Politics.findByIdAndDelete(req.params.id);
    res.status(200).json("Politics has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPolitics = async (req, res) => {
  try {
    const politics = await Politics.findById(req.params.id);

    res.status(200).json(politics);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPolitics = async (req, res) => {
  try {
    const allPolitics = await Politics.find();
    res.status(200).json(allPolitics);
  } catch (error) {
    res.status(500).json(error);
  }
};
