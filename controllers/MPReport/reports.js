import Reports from "../../models/MPReport/Reports.js";

export const AddReport = async (req, res) => {
  const newReports = new Reports(req.body);

  try {
    const savedReports = await newReports.save();
    res.status(200).json(savedReports);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateReport = async (req, res) => {
  try {
    const updatedReports = await Reports.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedReports);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteReport = async (req, res) => {
  try {
    await Reports.findByIdAndDelete(req.params.id);
    res.status(200).json("Reports has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReport = async (req, res) => {
  try {
    const report = await Reports.findById(req.params.id);

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllReports = async (req, res) => {
  try {
    const allReports = await Reports.find();
    res.status(200).json(allReports);
  } catch (error) {
    res.status(500).json(error);
  }
};
