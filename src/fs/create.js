import fs from "node:fs/promises";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const create = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    const content = "I am fresh and young";
    await fs.writeFile(filePath, content, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
