import DebateSpeaks from "../../models/Politics/DebateSpeaks.js";

export const AddDebateSpeak = async (req, res) => {
  const newDebateSpeak = new DebateSpeaks(req.body);

  try {
    const savedDebateSpeak = await newDebateSpeak.save();
    res.status(200).json(savedDebateSpeak);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDebateSpeak = async (req, res) => {
  try {
    const updatedDebateSpeak = await DebateSpeaks.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedDebateSpeak);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDebateSpeak = async (req, res) => {
  try {
    await DebateSpeaks.findByIdAndDelete(req.params.id);
    res.status(200).json("DebateSpeak has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDebateSpeak = async (req, res) => {
  try {
    const debateSpeak = await DebateSpeaks.findById(req.params.id);

    res.status(200).json(debateSpeak);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllDebateSpeak = async (req, res) => {
  try {
    const allDebateSpeak = await DebateSpeaks.find();
    res.status(200).json(allDebateSpeak);
  } catch (error) {
    res.status(500).json(error);
  }
};
