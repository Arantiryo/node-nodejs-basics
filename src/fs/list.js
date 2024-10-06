import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const list = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filesPath = path.join(__dirname, "files");

  try {
    const files = await fs.readdir(filesPath);
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
