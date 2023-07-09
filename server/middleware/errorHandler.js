const errorHandler = (err, req, res, next) => {
  return res.status(400).json({ success: false, error: "Not a valid id." });
};

module.exports = errorHandler;