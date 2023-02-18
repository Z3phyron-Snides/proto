const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const handleMedia = async (req, res, next) => {
  const host = "http://localhost:5000/uploads/";
  const files = req.files;
//   console.log(files.videos);
  let reqFiles = [];
  let promises = [];

  if (!files) {
    return next();
  }

  const keys = Object.keys(files);
  if (keys.length === 0) {
    return next(createHttpError.UnsupportedMediaType());
  }

  keys.forEach((key) => {
    let fileArray = files[key];
    if (!Array.isArray(fileArray)) {
      fileArray = [fileArray];
    }

    fileArray.forEach((file) => {
      let fileType = "";

      if (file.mimetype.startsWith("image")) {
        fileType = "image";
      } else if (file.mimetype.startsWith("video")) {
        fileType = "video";
      } else {
        return next(createHttpError.UnsupportedMediaType());
      }

      file.name = uuidv4();
      let fileName = file.name + "." + file.mimetype.split("/")[1];
      const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
      let url = host + fileName;
      reqFiles.push({ url, type: fileType });
      promises.push(file.mv(savePath));
    });
  });
    
    // console.log(reqFiles)

  req.media = reqFiles;
  next();
};

module.exports = handleMedia;
