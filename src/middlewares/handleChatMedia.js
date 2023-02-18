const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const handleChatMedia = async (req, res, next) => {
  const host = "http://localhost:5000/uploads/";
  const file = req.file;

  if (!file) {
    return next();
  }

  console.log(req.file)

  if (
    !file.mimetype.startsWith("image") &&
    !file.mimetype.startsWith("video")
  ) {
    return next(createHttpError.UnsupportedMediaType());
  }

  const fileType = file.mimetype.startsWith("image") ? "image" : "video";
  const fileName = uuidv4() + "." + file.mimetype.split("/")[1];
  const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
  const url = host + fileName;

  await file.mv(savePath);

  const reqFile = { url, type: fileType };

  req.media = reqFile;
  next();
};

module.exports = handleChatMedia;
