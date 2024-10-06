import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const rename = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);

  const srcFile = path.join(__dirname, "wrongFilename.txt");
  const newFile = path.join(__dirname, "properFilename.md");

  try {
    await fs.access(newFile);
    throw new Error("New file exists");
  } catch (err) {
    if (err.message === "New file exists")
      throw new Error("FS operation failed");

    try {
      await fs.rename(srcFile, newFile);
    } catch (err) {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
