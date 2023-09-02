import Message from "../../models/Home/Message.js";

export const AddMessage = async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const updateMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};



export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("Message has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getAllMessage = async (req, res) => {
    try {
       const allMessages = await Message.find();

      res.status(200).json(allMessages);

    } catch (error) {
      res.status(500).json(error);
    }
};