# my-cicd-project

# 🚀 CI/CD Pipeline Project

![CI/CD](https://github.com/Yashvi2125/my-cicd-project/actions/workflows/ci-cd.yml/badge.svg)

## 📌 Project Title
Automated CI/CD Pipeline for a Containerized Application

## 🎯 Objective
To implement an end-to-end CI/CD pipeline that automatically builds, 
tests, packages, and prepares a simple application for deployment 
using GitHub Actions, Docker, and Docker Hub.

## 🛠️ Tools & Technologies
- **Version Control:** GitHub
- **CI/CD Automation:** GitHub Actions (YAML)
- **Containerization:** Docker Desktop & Dockerfile
- **Container Registry:** Docker Hub
- **Testing:** Jest & Supertest
- **Runtime:** Node.js + Express

## 📁 Project Structure
```
my-cicd-project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml    ← GitHub Actions pipeline
├── app.js               ← Express app
├── server.js            ← Entry point
├── app.test.js          ← Jest tests
├── Dockerfile           ← Docker config
├── .dockerignore
├── .gitignore
└── package.json
```

## 🔄 CI/CD Pipeline Flow
```
git push → GitHub Actions triggers
              │
              ▼
        Job 1: Build & Test
        ✅ Checkout code
        ✅ Setup Node.js
        ✅ Install dependencies
        ✅ Run Jest tests
              │
              ▼ (only if tests pass)
        Job 2: Docker
        ✅ Login to Docker Hub
        ✅ Build Docker image
        ✅ Push image (latest + SHA tag)
```

## 🚀 Pipeline Stages
- **Source Stage:** Code committed to GitHub repository
- **Trigger:** Push to main branch triggers GitHub Actions
- **Build Stage:** Checkout code, install dependencies, run tests
- **Package Stage:** Build Docker image and push to Docker Hub
- **Artifact:** Container image available on Docker Hub

## ⚙️ How to Run Locally
```bash
# Install dependencies
npm install

# Run tests
npm test

# Start server
npm start
```

## 🐳 Docker
```bash
# Build image
docker build -t my-cicd-app .

# Run container
docker run -p 3000:3000 my-cicd-app

# Visit http://localhost:3000
```

## 🔐 GitHub Secrets Required
| Secret | Description |
|--------|-------------|
| DOCKER_USERNAME | Docker Hub username |
| DOCKER_PASSWORD | Docker Hub access token |

## ✅ Expected Output
A fully automated pipeline that ensures every code change is 
integrated, tested, and containerized, providing a deployable 
artifact on Docker Hub with minimal manual intervention.