const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  if (!req.headers["authorization"])
    return next(createHttpError.Unauthorized());

  const authHeader = req.headers["authorization"];
  const BearerToken = authHeader.split(" ");
  const token = BearerToken[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, "ses4e5rfrd4ed5");
    // console.log(decoded)
    if (!decoded.id ) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized user.",
      });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Invalid token.",
    });
  }
};

module.exports = verifyToken;
