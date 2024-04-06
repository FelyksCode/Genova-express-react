const News = require("../../models/News");

exports.getAllNews = async function (req, res) {
  try {
    const news = await News.find();
    res.status(200).json({ error: false, news: news });
  } catch (err) {
    res.status(500).send({ error: true, message: err.message });
  }
};

exports.getNewsByID = async function (req, res) {
  if (!req.params.id) {
    return res.status(400).json({ error: true, message: "bad request" });
  }
  try {
    const findNews = await News.findById(req.params.id);
    if (!findNews) {
      return res.status(200).json({ error: true, message: "not found id" });
    }
    return res
      .status(200)
      .json({ error: false, message: "news found", data: findNews });
  } catch (err) {}
};

exports.createNews = async function (req, res) {
  const image = req.file ? req.file.path : null;
  const { title, content } = req.body;
  try {
    const insertNews = new News({
      image: image.replace("public/", ""),
      title: title,
      content: content,
    });
    await insertNews.save();
    return res.status(500).json({
      error: false,
      message: "News created!",
      data: {
        _id: insertNews._id,
        title,
        content,
      },
    });
  } catch (e) {
    console.log("Create news error: " + e.message);
    return res.status(500).json({ error: true, message: e.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res.status(404).json({ error: true, message: "News not found" });
    }

    return res
      .status(200)
      .json({ error: false, message: "News deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const image = req.file ? req.file.path : null;
    const { id } = req.params;
    const { ...updateData } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      id,
      { updateData, image },
      {
        new: true,
      }
    );

    if (!updatedNews) {
      return res.status(404).json({ error: true, message: "News not found" });
    }

    return res.status(200).json({
      error: false,
      message: "News updated successfully",
      data: updatedNews,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};
