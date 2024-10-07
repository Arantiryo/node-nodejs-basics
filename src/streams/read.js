import { open } from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const read = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const fd = await open(filePath, "r");
  const stream = fd.createReadStream();

  stream.pipe(process.stdout);

  stream.on("end", () => {
    console.log("");
  });
};

await read();
