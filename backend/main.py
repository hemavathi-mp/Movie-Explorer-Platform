from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router


apps = FastAPI(title="Movie Explorer API")

apps.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

apps.include_router(router)

# Placeholder for app/main.py
