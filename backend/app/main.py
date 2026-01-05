from fastapi import FastAPI, HTTPException
from app.core.exceptions import http_exception_handler
from app.core.database import Base, engine
from app.routers import auth, users
from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)

app = FastAPI(title="FastAPI Auth CRUD")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_exception_handler(HTTPException, http_exception_handler)
app.include_router(auth.router)
app.include_router(users.router)

