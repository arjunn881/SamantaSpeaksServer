import News from "../../models/Home/News.js";

export const AddNews = async (req, res) => {
  const newNews = new News(req.body);

  try {
    const savedNews = await newNews.save();
    res.status(200).json(savedNews);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateNews = async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json("News has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find();
    res.status(200).json(allNews);
  } catch (error) {
    res.status(500).json(error);
  }
};
