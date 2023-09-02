import Article from "../../models/Home/Article.js";

export const AddArticle = async (req, res) => {
    const newArticle = new Article(req.body);
  
    try {
      const savedArticle = await newArticle.save();
      res.status(200).json(savedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  export const updateArticle = async (req, res) => {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  
  export const deleteArticle = async (req, res) => {
    try {
      await Article.findByIdAndDelete(req.params.id);
      res.status(200).json("Article has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const getArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
  
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  
  
  export const getAllArticle = async (req, res) => {
      try {
         const allArticles = await Article.find();
  
        res.status(200).json(allArticles);
  
      } catch (error) {
        res.status(500).json(error);
      }
  };