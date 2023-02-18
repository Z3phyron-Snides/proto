const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const handleImage = async (req, res, next) => {
  // console.log(req.files);

  const files = req.files.images;
  let reqFiles = '';
  let promises = []

  const host = "http://localhost:5000/uploads/";

  //check if files exist
  if (req.files === null) {
    return next(createHttpError.UnsupportedMediaType());
  } else {
    //rename files with generated id
    
      files.name = uuidv4();
      let fileName = files.name + "." + files.mimetype.split("/")[1];
      const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
      let url = host + fileName;
      reqFiles = url;
      promises.push(files.mv(savePath));
 
  }
  req.images = reqFiles;
  next();
};

module.exports = handleImage;
