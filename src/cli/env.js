const parseEnv = () => {
  const strOfEnvs = Object.entries(process.env)
    .filter(([key, _]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(strOfEnvs);
};

parseEnv();
