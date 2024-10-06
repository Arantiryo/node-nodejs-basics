import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const remove = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
