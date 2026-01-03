from pydantic import BaseModel
from typing import Generic, TypeVar, List, Optional

T = TypeVar("T")

class Pagination(BaseModel):
    totalItems: int
    totalPages: int
    currentPage: int
    hasNextPage: bool
    hasPreviousPage: bool

class APIResponse(BaseModel, Generic[T]):
    success: bool
    data: List[T]
    pagination: Optional[Pagination] = None
