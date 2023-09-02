import ParliamentQuestions from "../../models/Politics/ParliamentQuestions.js";

export const AddParliamentQuestion = async (req, res) => {
  const newParliamentQuestion = new ParliamentQuestions(req.body);

  try {
    const savedParliamentQuestion = await newParliamentQuestion.save();
    res.status(200).json(savedParliamentQuestion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateParliamentQuestion = async (req, res) => {
  try {
    const updatedParliamentQuestion = await ParliamentQuestions.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedParliamentQuestion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteParliamentQuestion = async (req, res) => {
  try {
    await ParliamentQuestions.findByIdAndDelete(req.params.id);
    res.status(200).json("ParliamentQuestion has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getParliamentQuestion = async (req, res) => {
  try {
    const parliamentQuestion = await ParliamentQuestions.findById(req.params.id);

    res.status(200).json(parliamentQuestion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllParliamentQuestion = async (req, res) => {
  try {
    const allParliamentQuestion = await ParliamentQuestions.find();
    res.status(200).json(allParliamentQuestion);
  } catch (error) {
    res.status(500).json(error);
  }
};
