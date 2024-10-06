import path from "path";
import { fileURLToPath } from "url";

export const getCurrentDir = (url) => {
  // Get the current file path
  const __filename = fileURLToPath(url);
  // Get the current directory
  const __dirname = path.dirname(__filename);

  return { __filename, __dirname };
};
