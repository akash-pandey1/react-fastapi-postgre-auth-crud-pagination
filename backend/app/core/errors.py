from fastapi import HTTPException

def not_found(message="Resource not found"):
    raise HTTPException(status_code=404, detail=message)

def bad_request(message="Bad request"):
    raise HTTPException(status_code=400, detail=message)

def unauthorized(message="Unauthorized"):
    raise HTTPException(status_code=401, detail=message)

def forbidden(message="Forbidden"):
    raise HTTPException(status_code=403, detail=message)