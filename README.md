# 🤖 AI DevOps SDK

**AI-powered DevOps automation toolkit for the next generation of engineers.**

`aidevops-sdk` is an open-source project that transforms traditional DevOps into an **agentic, AI-driven workflow**.  
It helps developers automate builds, deploys, monitoring, and optimization — all powered by OpenAI and modern cloud tooling.

---

## 🚀 Vision

To build an **AI DevOps Ecosystem** where every engineer has a virtual teammate —  
an **AI DevOps Copilot** that can reason, plan, and execute across the full CI/CD lifecycle.

> *From idea → deploy → monitor → optimize — autonomously.*

---

## 🧩 Key Features (Phase 1 – SDK)

| Feature | Description |
|----------|--------------|
| ⚙️ **Smart Deploy** | AI agent analyzes your repo & deploys to AWS/GCP/Azure automatically. |
| 🧠 **CI/CD Automation** | Generates, validates, and executes pipeline YAMLs via reasoning. |
| 🔍 **Health & Logs** | AI-driven log analysis and incident summarization. |
| 📈 **Auto-Optimization** | Suggests resource, cost, and performance improvements. |
| 🧰 **Pluggable Tools** | Integrate Docker, Terraform, GitHub Actions, Kubernetes, etc. |
| 🤖 **Agent SDK** | Build your own custom DevOps Agents on top of our SDK. |

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **SDK Core** | Node.js + TypeScript |
| **Backend (AI Brain)** | Python + FastAPI + LangChain |
| **AI Models** | OpenAI GPT-4o / Ollama |
| **Memory** | Redis / Vector DB |
| **Infra** | Docker + Terraform + GitHub Actions |
| **Docs** | Markdown / Docusaurus |

---

## 🧱 Folder Structure

```

aidevops-sdk/
├── sdk/              # Node SDK & CLI
├── backend/          # Python AI Backend
├── examples/         # Example usage
├── docs/             # Documentation
└── scripts/          # Dev & setup scripts

````

---

## ⚙️ Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/aidevops-sdk.git
cd aidevops-sdk
````

### 2. Install SDK dependencies

```bash
cd sdk
npm install
```

### 3. Run SDK

```bash
npx ts-node src/index.ts
```

### 4. Run backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 5. Test health endpoint

Open in your browser → [http://localhost:8000/health](http://localhost:8000/health)

---

## 🧠 Example Usage

```bash
# Deploy an app automatically
aidevops deploy --repo=https://github.com/user/project
```

The SDK connects to the AI backend → interprets your repo → builds → deploys → and reports status.

---

## 🤝 Contributing

We welcome community contributions!

See **[`docs/contributing.md`](docs/contributing.md)** for how to:

* 🐛 Report bugs
* 🧩 Submit PRs
* 🧠 Add new agents
* 📚 Improve documentation

---

## 🧾 License

**MIT License** — free for personal and commercial use.
See the [LICENSE](LICENSE) file for details.

---

## 🌐 Community & Contact

| Channel              | Link                                                       |
| -------------------- | ---------------------------------------------------------- |
| 🌍 **Website**       | [https://aidevops.ai](https://aidevops.ai) *(coming soon)* |
| 💬 **Discord**       | Coming soon                                                |
| 🧑‍💻 **Maintainer** | [@shahmeersensei](https://github.com/shahmeersensei)       |

