import { Guid } from "guid-typescript";
const multer = require("multer");

// configurates how the files are gonna be stored
const storage = multer.diskStorage({
  destination: function (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) {
    callback(null, "src/uploads/");
  },
  filename: function (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) {
    callback(null, Guid.create() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
