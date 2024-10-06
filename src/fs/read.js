import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const read = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const contents = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
