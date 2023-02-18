const jwt = require("jsonwebtoken");

const verifyTokenAndAdmin = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, "ses4e5rfrd4ed5");
    req.user = decoded;
    if (!req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        error: "Access denied. Not authorized as an admin.",
      });
    }
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Invalid token.",
    });
  }
};

module.exports = verifyTokenAndAdmin;
