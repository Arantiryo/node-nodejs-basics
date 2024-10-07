import { open } from "node:fs/promises";
import crypto from "crypto";
import path from "path";
import { getCurrentDir } from "../utils/utils.js";

const calculateHash = async () => {
  const { __dirname } = getCurrentDir(import.meta.url);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = crypto.createHash("sha256");

  const fd = await open(filePath);
  const stream = fd.createReadStream();

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const hashHex = hash.digest("hex");
    console.log(hashHex);
  });

  stream.on("error", (err) => {
    console.error(err);
  });
};

await calculateHash();
