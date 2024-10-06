import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const copy = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);

  const srcFolder = path.join(__dirname, "files");
  const destFolder = path.join(__dirname, "files_copy");

  try {
    await fs.cp(srcFolder, destFolder, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
