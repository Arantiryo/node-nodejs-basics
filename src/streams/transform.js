import { Transform } from "stream";

class ReverseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("");
    this.push(reversedChunk);
    callback();
  }
}

const transform = async () => {
  const reverseStream = new ReverseTransform();

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
