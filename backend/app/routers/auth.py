from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserResponse, UserLogin, TokenResponse
from app.services.user_service import create_user, authenticate_user
from app.core.database import get_db
from app.core.security import create_access_token
from app.core.errors import bad_request, unauthorized

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/register", response_model=UserResponse)
def register(data: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(UserResponse).filter(UserResponse.email == data.email).first()
    if existing_user:
        bad_request("Email already registered")
    return create_user(db, data.email, data.password, data.name, data.role)

@router.post("/login", response_model=TokenResponse)
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = authenticate_user(db, data.email, data.password)
    if not user:
        unauthorized("Invalid email or password")   
    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token, "user": user}
