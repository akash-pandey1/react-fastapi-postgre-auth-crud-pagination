from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str
    role: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    name: str
    role: str

    class Config:
        from_attributes = True
        orm_mode = True

class TokenResponse(BaseModel):
    access_token: str
    user: UserResponse
