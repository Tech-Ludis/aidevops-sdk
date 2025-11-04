# AI DevOps SDK 

![CI](https://github.com/shahmeersensei/aidevops-sdk/actions/workflows/ci.yml/badge.svg)

<img width="1280" height="600" alt="Generated Image November 01, 2025 - 6_17PM 2" src="https://github.com/user-attachments/assets/8d250ecf-a46e-47c2-8183-b4c0117942dd" />
 

**Empowering Self-Driven DevOps Engineers.**
The **AI DevOps SDK** is an open-source framework that enables developers, agents, and organizations to **automate cloud-native DevOps tasks** using an **intelligent SDK + FastAPI backend**.

This repository is part of the **Agentic AI DevOps Framework**, designed to build autonomous pipelines, deploy AI copilots, and simplify engineering automation from Day-0 setup to production delivery.

---

## 🧭 Project Vision

To make **DevOps automation human-like and self-driven** — where AI agents can scaffold, deploy, monitor, and optimize entire systems autonomously.

The SDK serves as a foundation to:

* Build AI agents that **orchestrate CI/CD pipelines**.
* Provide a **TypeScript + Python hybrid SDK** for cloud automation.
* Offer modular APIs that extend into **AI-driven infra and code intelligence**.

---

## 🧱 Repository Structure

```
aidevops-sdk/
│
├── backend/                # FastAPI backend
│   └── app/
│       └── main.py         # Health endpoint
│
├── sdk/                    # SDK CLI and interfaces
│   └── src/
│       └── index.ts        # CLI entry
│
├── docs/                   # Documentation and specifications
├── examples/               # Example use-cases and demos
│
├── .github/
│   └── workflows/ci.yml    # Basic CI pipeline (lint + build)
│
├── .env.example            # Example environment variables
├── .gitignore              # Ignored files
├── LICENSE                 # License (MIT or Apache 2.0)
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Community rules
├── SECURITY.md             # Security policy
└── README.md               # You’re here 🚀
```

---

## ⚙️ Functional Overview

| Component             | Description                                    |
| --------------------- | ---------------------------------------------- |
| **Backend (FastAPI)** | Hosts core API endpoints (currently `/health`) |
| **SDK (TypeScript)**  | CLI that communicates with backend endpoints   |
| **Docs & Examples**   | Provides onboarding and usage examples         |
| **CI/CD**             | Lint + build checks for repository stability   |

---

## 🌐 API Interface

### **Endpoint:** `GET /health`

**Response**

```json
{
  "status": "ok",
  "message": "AI DevOps Backend running smoothly"
}
```

---

## 💻 Quick Start (Cross-Platform)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tech-Ludis/aidevops-sdk.git
cd aidevops-sdk
```

### 2️⃣ Create & Activate Virtual Environment

#### 🪟 Windows CMD

```bash
python -m venv venv
venv\Scripts\activate
```

#### 💠 Windows PowerShell

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

#### 🐧 macOS / Linux / WSL

```bash
python3 -m venv venv
source venv/bin/activate
```

When activated, your prompt should show:

```
(venv) F:\aidevops-sdk>
```

---

### 3️⃣ Install Backend Dependencies

```bash
pip install fastapi uvicorn
```

(Optional)

```bash
pip freeze > backend/requirements.txt
```

---

### 4️⃣ Run the Backend Server

Windows (cmd.exe)

```cmd
cd backend
python -m uvicorn app.main:app --reload
```

PowerShell

```powershell
cd backend
python -m uvicorn app.main:app --reload
```

macOS / Linux

```bash
cd backend
python3 -m uvicorn app.main:app --reload
```

Expected output (uvicorn logs):

```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

---

### 5️⃣ Verify Health Endpoint

Open in browser:

```
http://127.0.0.1:8000/health
```

Expected response:

```json
{
  "status": "ok",
  "message": "AI DevOps Backend running smoothly"
}
```

---

### 6️⃣ Run SDK CLI (Optional)

```bash
npx ts-node sdk/src/index.ts
```

Should print the same health message.

---

### 7️⃣ Deactivate Environment

```bash
deactivate
```

---

## 🔐 Security

* Never commit `.env` or secrets.
* Use `.env.example` as a safe reference for contributors.
* Follow the `SECURITY.md` guidelines for reporting vulnerabilities.

---

## 🧩 CI / CD

This project includes a **GitHub Actions workflow** (`.github/workflows/ci.yml`) that:

* Runs lint and build checks
* Ensures docs and backend pass minimal validation
* Keeps the project always runnable on every commit

---

## 🧠 AI Agent Hints (for autonomous scaffolding)

> When used by an AI agent, execute these steps sequentially:

1. Validate folder structure matches this README.
2. Generate missing scaffold files (`sdk`, `backend`, `docs`, etc.).
3. Start backend → call `/health`.
4. Run CLI → confirm successful health response.
5. Push updates with commit message:

   ```
   chore(phase-0): scaffolding + health check completed
   ```

---

## 🧑‍💻 Contributing

We welcome all contributors! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) and follow the code of conduct.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
© 2025 Tech Ludis — All rights reserved.

---

## ✅ Phase 0 Acceptance Checklist

| Task                                  | Status |
| ------------------------------------- | ------ |
| Repository contains all baseline docs | ✅      |
| `/health` endpoint runs successfully  | ✅      |
| SDK CLI returns valid response        | ✅      |
| CI build passes without errors        | ✅      |
| README setup verified cross-platform  | ✅      |

---

## 🕓 Estimated Timeline

| Phase                            | Duration     | Owner         |
| -------------------------------- | ------------ | ------------- |
| **Phase 0 — Scaffolding & Docs** | 1–2 dev-days | Solo Engineer |

---
