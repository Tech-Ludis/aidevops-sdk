// Simple CLI health check for AI DevOps backend
// Usage: npx ts-node sdk/src/index.ts

import axios from "axios";

async function main() {
  const res = await axios.get("http://localhost:8000/health");
  const data = res.data;
  // Print in the simple key: value format expected by the docs
  if (data && typeof data === "object") {
    if (data.status) console.log(`status: ${data.status}`);
    if (data.message) console.log(`message: ${data.message}`);
  } else {
    console.log(JSON.stringify(data));
  }
}

main().catch(err => {
  console.error("Error connecting to backend:", err.message || err);
  process.exitCode = 1;
});
