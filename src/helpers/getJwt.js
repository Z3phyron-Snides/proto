


const jwt = require("jsonwebtoken");

const getJwt = (user) => {
  const accessPayload = {
    email: user.email,
    id: user._id,
  };

  const accessOptions = {
    expiresIn: "2h",
    issuer: "my-app",
  };

  const refreshPayload = {
    email: user.email,
    id: user._id,
  };

  const refreshOptions = {
    expiresIn: "24h",
    issuer: "my-app",
  };

  const secret = "ses4e5rfrd4ed5";

  const accessToken = jwt.sign(accessPayload, secret, accessOptions);
  const refreshToken = jwt.sign(refreshPayload, secret, refreshOptions);

  return { accessToken, refreshToken };
};

module.exports = getJwt;