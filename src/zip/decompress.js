import { open } from "node:fs/promises";
import zlib from "zlib";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const decompress = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const inputFilePath = path.join(__dirname, "files", "archive.gz");
  const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

  const fdRead = await open(inputFilePath);
  const fdWrite = await open(outputFilePath, "w");

  const readStream = fdRead.createReadStream();
  const writeStream = fdWrite.createWriteStream();

  const gzip = zlib.createUnzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("Decompression finished");
  });
};

await decompress();
