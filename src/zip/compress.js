import { open } from "node:fs/promises";
import zlib from "zlib";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const compress = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const inputFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const outputFilePath = path.join(__dirname, "files", "archive.gz");

  const fdRead = await open(inputFilePath, "r");
  const fdWrite = await open(outputFilePath, "w");

  const readStream = fdRead.createReadStream();
  const writeStream = fdWrite.createWriteStream();

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("Compression finished");
  });
};

await compress();
