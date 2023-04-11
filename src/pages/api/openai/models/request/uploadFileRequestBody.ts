import * as fs from "fs";

export interface UploadFileRequestBody {
  purpose: string;
  file: fs.ReadStream;
}
