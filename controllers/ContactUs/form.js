import Form from "../../models/ContactUs/Form.js";

export const AddForm = async (req, res) => {
  const newForm = new Form(req.body);

  try {
    const savedForm = await newForm.save();
    res.status(200).json(savedForm);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.status(200).json("Form has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    res.status(200).json(form);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllForm = async (req, res) => {
  try {
    const allForm = await Form.find();
    res.status(200).json(allForm);
  } catch (error) {
    res.status(500).json(error);
  }
};
