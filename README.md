# harness
Here is a more complete README.md you can paste into your GitHub repository. It documents everything you've built so far and gives you a meaningful commit to test your Harness trigger.

# Harness CI/CD Learning Project

A hands-on learning project demonstrating end-to-end Continuous Integration and Continuous Deployment (CI/CD) using Harness.

## Project Goal

This repository was created to learn and practice:

- Git and GitHub
- Node.js application development
- Docker containerization
- Docker Hub image registry
- Kubernetes deployments
- Harness Delegate installation
- Harness CI pipelines
- Harness CD pipelines
- Automated triggers and deployments

---

## Application Overview

This is a simple Express.js application that exposes a single HTTP endpoint.

### Endpoint

```http
GET /
```

### Response

```text
Hello from Harness CI/CD
```

---

## Technology Stack

| Component | Technology |
|------------|------------|
| Source Control | GitHub |
| Application | Node.js |
| Framework | Express.js |
| Containerization | Docker |
| Image Registry | Docker Hub |
| Orchestration | Kubernetes |
| CI/CD Platform | Harness |
| Kubernetes Runtime | Docker Desktop Kubernetes |

---

## Project Structure

```text
.
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .gitignore
├── .dockerignore
├── .npmignore
└── README.md
```

---

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```

Expected Output:

```text
Hello from Harness CI/CD
```

---

## Docker

### Build Image

```bash
docker build -t harness-demo:v1 .
```

### Run Container

```bash
docker run -p 3000:3000 harness-demo:v1
```

Application URL:

```text
http://localhost:3000
```

---

## Docker Hub Repository

Repository:

```text
gsd00110110/harness
```

Example Image:

```text
gsd00110110/harness:v1
```

---

## Kubernetes

Local Kubernetes is provided through Docker Desktop.

Verify Cluster:

```bash
kubectl get nodes
```

Expected:

```text
NAME                    STATUS
desktop-control-plane   Ready
```

---

## Harness Delegate

Harness Delegate runs inside Kubernetes.

Verify Delegate Pod:

```bash
kubectl get pods -n harness-delegate-ng
```

Expected:

```text
READY   STATUS
1/1     Running
```

---

## CI Pipeline Objectives

The Harness CI pipeline will perform the following steps:

```text
GitHub
   ↓
Clone Repository
   ↓
npm install
   ↓
npm test
   ↓
Docker Build
   ↓
Docker Push
   ↓
Docker Hub
```

---

## CD Pipeline Objectives

Future enhancements include:

```text
Docker Hub
      ↓
Harness CD
      ↓
Kubernetes Deployment
      ↓
Verification
      ↓
Rollback (if required)
```

---

## Learning Progress

### Completed

- [x] Create Node.js application
- [x] Run application locally
- [x] Create GitHub repository
- [x] Build Docker image
- [x] Push image to Docker Hub
- [x] Enable Kubernetes in Docker Desktop
- [x] Install Harness Delegate
- [x] Connect Delegate to Harness

### In Progress

- [ ] Configure GitHub Connector
- [ ] Configure Docker Hub Connector
- [ ] Create Harness CI Pipeline
- [ ] Configure Git Trigger

### Planned

- [ ] Deploy to Kubernetes
- [ ] Create CD Pipeline
- [ ] Implement Rollback Strategy
- [ ] Add Approval Steps
- [ ] Configure Canary Deployment

---

## Trigger Test

This section is used to verify GitHub-to-Harness trigger integration.

Last Trigger Validation:

```text
2026-11-07
```

Commit Message Example:

```text
docs: update README for trigger validation
```

---

## Author

Gunasekar

Harness CI/CD Learning Project

Harness CI/CD Learning Project 