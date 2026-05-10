import app from "./app";
import { testConnection } from "./config/database";

const PORT = process.env.PORT || 3001;

async function main() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

main();
