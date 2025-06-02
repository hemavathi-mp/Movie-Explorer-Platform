
# File: backend/app/crud.py
from sqlalchemy.orm import Session
from app import models

def get_movies(db: Session):
    return db.query(models.Movie).all()

def get_movie_by_id(db: Session, movie_id: int):
    return db.query(models.Movie).filter(models.Movie.id == movie_id).first()

