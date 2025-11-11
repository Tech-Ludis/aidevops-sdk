# Examples

This folder contains quick examples for using the SDK and backend.

## 1. Health Check

### 1.1. Start the Backend

First, set up and run the FastAPI backend.

#### Create & Activate Virtual Environment

Open your terminal in the project root.

**🪟 Windows CMD**
```bash
python -m venv venv
venv\Scripts\activate
```

**💠 Windows PowerShell**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**🐧 macOS / Linux / WSL**
```bash
python3 -m venv venv
source venv/bin/activate
```

#### Install Dependencies & Run

```bash
# Install from requirements
pip install -r backend/requirements.txt

# Run the server from the root
cd backend
uvicorn app.main:app --reload --port 8000
```

### 1.2. Run SDK CLI

In a **new terminal**, run the TypeScript CLI from the project root:

```bash
# Install dependencies
cd sdk
npm install

# Run the health check
npx ts-node src/index.ts
```

You should see the backend's health status printed to your console.
```
