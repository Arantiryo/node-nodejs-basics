const parseArgs = () => {
  const parsedArgs = process.argv
    .slice(2)
    .reduce((acc, val, idx, arr) => {
      if (val.startsWith("--")) {
        const argument = val.slice(2);
        const value = arr?.[idx + 1];

        acc.push(`${argument} is ${value}`);
      }

      return acc;
    }, [])
    .join(", ");

  console.log(parsedArgs);
};

parseArgs();
