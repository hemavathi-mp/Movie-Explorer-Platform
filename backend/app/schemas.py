# File: backend/app/schemas.py
from typing import List
from pydantic import BaseModel

class Genre(BaseModel):
    id: int
    name: str
    class Config:
        orm_mode = True

class Actor(BaseModel):
    id: int
    name: str
    class Config:
        orm_mode = True

class Director(BaseModel):
    id: int
    name: str
    class Config:
        orm_mode = True

class Movie(BaseModel):
    id: int
    title: str
    release_year: int
    director: Director
    genres: List[Genre]
    actors: List[Actor]
    class Config:
        orm_mode = True

