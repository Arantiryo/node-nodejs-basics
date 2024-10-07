import { open } from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const read = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const fd = await open(filePath);
  const stream = fd.createReadStream();

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("");
  });

  stream.on("error", (err) => {
    console.error(err);
  });
};

await read();
