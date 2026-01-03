from fastapi import APIRouter, Depends, Query
from math import ceil
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.user import User
from app.schemas.user import UserResponse
from app.services.user_service import get_users
from app.schemas.common import APIResponse, Pagination

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/", response_model=APIResponse[UserResponse])
def list_users(
    db: Session = Depends(get_db),
    page: int = Query(1, ge=1),
    limit: int = Query(10, le=100),
):
    total_items = db.query(User).count()
    total_pages = ceil(total_items / limit)

    users = (
        db.query(User)
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )

    return {
        "success": True,
        "data": users,
        "pagination": {
            "totalItems": total_items,
            "totalPages": total_pages,
            "currentPage": page,
            "hasNextPage": page < total_pages,
            "hasPreviousPage": page > 1,
        },
    }