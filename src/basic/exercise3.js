async function retryOperation(asyncFn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await asyncFn();
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Falha após ${retries} tentativas:`, error);
        throw error;
      }

      console.warn(
        `Tentativa ${i + 1} falhou. Tentando novamente em ${delay}ms...`
      );
      await new Promise((resolve) => setInterval(resolve, delay));
    }
  }
}

async function fetchData() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?page=1&limit=10"
  );
  return console.log(await response.json());
}

retryOperation(() => fetchData(), 3);
