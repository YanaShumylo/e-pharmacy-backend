# 🏥 E-Pharmacy Backend

A REST API for an e-pharmacy application that provides user authentication, medicine catalog management, shopping cart functionality, store information, and order processing.

## ⚡ Features

* User registration and authentication.
* JWT-based authorization with protected routes.
* Password hashing with bcrypt.
* User profile management.
* Medicine catalog with search and filtering.
* Product details retrieval.
* Shopping cart management.
* Checkout functionality.
* Pharmacy stores information.
* Customer reviews.
* Promo banners.
* Request validation using Joi.
* Centralized error handling.
* MongoDB database integration.
* API documentation with Swagger (OpenAPI).
* File upload support via Cloudinary.
* Backend deployment on Render.

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript (ES Modules)

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT authentication
* bcrypt password hashing
* cookie-parser
* CORS

### Validation & Documentation

* Joi validation
* Swagger UI (OpenAPI)

### File Storage & Deployment

* Cloudinary
* Render

### Logging

* Pino HTTP Logger

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/YanaShumylo/e-pharmacy-backend.git
```

## 2. Navigate to the project folder

```bash
cd e-pharmacy-backend
```

## 3. Install dependencies

```bash
npm install
```

## 4. Create environment variables

Create a `.env` file in the root directory:

```env
PORT=

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

---

## ▶️ Running the Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# 🌐 Live Links

## Backend API

https://e-pharmacy-backend-ec12.onrender.com

## Swagger API Documentation

https://e-pharmacy-backend-ec12.onrender.com/api-docs


# 🔒 Authentication Flow

The application uses JWT authentication:

1. User registers an account.
2. Password is hashed before storing in database.
3. User logs in and receives an authentication token.
4. Protected routes require authorization.
5. Server validates the token before allowing access.

---

# 🗄 Database

The project uses MongoDB with Mongoose ODM.

Main entities:

* Users
* Products
* Cart
* Orders
* Stores
* Reviews
* Promo banners

---

# 🎯 Project Goal

The goal of this project was to build a scalable backend API for an online pharmacy platform with secure authentication, database integration, API documentation, and seamless communication with the frontend application.
