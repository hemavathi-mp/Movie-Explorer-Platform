# 🎬 Movie Explorer Platform

Explore movies, actors, directors, and genres through a fullstack web application built with **FastAPI** (backend) and **React + Vite** (frontend).

---

## 📦 Features

- Browse all movies with title, year, genres, and director
- Filter movies by genre, actor, or director
- View detailed movie pages with full cast
- Explore actor and director profiles with related films
- Responsive UI with Tailwind CSS
- Backend API documented with Swagger
- Fully Dockerized and testable

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer




1. Run with Docker
docker-compose up --build

2. Access the App
Frontend: http://localhost:3000
Backend API: http://localhost:8000/docs

Project Structure:
movie-explorer/
├── backend/       # FastAPI + SQLite
├── frontend/      # React + Vite + Tailwind

Frontend Tests:
cd frontend
npm install
npm run test
Uses Vitest + React Testing Library

Technologies:
Backend: FastAPI, SQLAlchemy, SQLite
Frontend: React, Vite, TypeScript, Tailwind CSS
Tools: Docker, Axios, React Router
