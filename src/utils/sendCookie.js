const getJwt = require("../helpers/getJwt");

const sendCookie = (user, req, res) => {
  const { accessToken, refreshToken } = getJwt(user);
  const cookieOptions = {
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    secure: true,
  };
  user.password = undefined;

  //implement express-session here
  req.session.user = user;

  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    accessToken,
    user,
  });
};

module.exports = { sendCookie };
