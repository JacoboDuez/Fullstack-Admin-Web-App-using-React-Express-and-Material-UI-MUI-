import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    console.log("overallStats", overallStats);
    res.status(200).json(overallStats[0]);
  } catch (error) {
    console.error("Error fetching sales data:", error.message);
    res.status(404).json({ message: error.message });
  }
};