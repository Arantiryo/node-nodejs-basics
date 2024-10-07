import { open } from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const write = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const fd = await open(filePath, "w");
  const stream = fd.createWriteStream();

  process.stdin.pipe(stream);
};

await write();
