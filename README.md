# React Python FastAPI CRUD Pagination

A full-stack web application built with React, TypeScript, Python, and FastAPI featuring CRUD operations with pagination support.

## 🎯 Project Overview

This project demonstrates a modern approach to building scalable web applications with:
- **Frontend**: React with TypeScript and Redux Toolkit
- **Backend**: Python with FastAPI
- **Features**: User authentication, CRUD operations, pagination, and responsive UI

## 📦 Tech Stack

### Frontend
- React 18+
- TypeScript
- Redux Toolkit
- Axios
- Vite (build tool)
- TailwindCSS (styling)

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy (ORM)
- Pydantic (data validation)
- JWT Authentication

## 📁 Project Structure

```
├── backend/                 # FastAPI application
│   ├── app/
│   │   ├── main.py         # Application entry point
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Configuration & database setup
│   │   ├── models/         # Database models
│   │   ├── routers/        # Route handlers
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React application
    ├── src/
    │   ├── auth/           # Authentication pages
    │   ├── core/           # Core utilities & hooks
    │   ├── layouts/        # Layout components
    │   ├── pages/          # Page components
    │   ├── routes/         # Route configuration
    │   └── main.tsx        # Application entry point
    ├── package.json        # Node dependencies
    └── vite.config.ts      # Vite configuration
```

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## ✨ Features

- 👤 User authentication with JWT
- 📋 CRUD operations for users and products
- 📄 Pagination support
- 🎨 Responsive UI design
- 🔐 Secure API endpoints
- 📱 Mobile-friendly interface

## 📝 Author

**Akash Pandey**
- Email: [akashdeep9226@gmail.com](mailto:akashdeep9226@gmail.com)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

For more information or support, please contact the author at the email provided above.
