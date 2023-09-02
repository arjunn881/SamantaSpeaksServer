import DiscussionOnGovt from "../../models/Politics/DiscussionOnGovt.js";

export const AddDiscussionOnGovt = async (req, res) => {
  const newDiscussionOnGovt = new DiscussionOnGovt(req.body);

  try {
    const savedDiscussionOnGovt = await newDiscussionOnGovt.save();
    res.status(200).json(savedDiscussionOnGovt);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDiscussionOnGovt = async (req, res) => {
  try {
    const updatedDiscussionOnGovt = await DiscussionOnGovt.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedDiscussionOnGovt);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDiscussionOnGovt = async (req, res) => {
  try {
    await DiscussionOnGovt.findByIdAndDelete(req.params.id);
    res.status(200).json("DiscussionOnGovt has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDiscussionOnGovt = async (req, res) => {
  try {
    const discussionOnGovt = await DiscussionOnGovt.findById(req.params.id);

    res.status(200).json(discussionOnGovt);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllDiscussionOnGovt = async (req, res) => {
  try {
    const allDiscussionOnGovt = await DiscussionOnGovt.find();
    res.status(200).json(allDiscussionOnGovt);
  } catch (error) {
    res.status(500).json(error);
  }
};
