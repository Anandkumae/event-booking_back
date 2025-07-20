# 🎫 Event Booking API

An Event Booking API built with **Node.js**, **Express**, **MongoDB Atlas**, and **JWT Authentication**, supporting user registration, login, event creation, booking, and admin-level management.

---

## 📌 Features

- 🔐 User Registration & Login with JWT
- 🧑‍💼 Role-based Access Control (User/Admin)
- 🗓️ Create, View, Update & Delete Events (Admin)
- 🎟️ Book Events (Authenticated Users)
- 📋 User Dashboard & Profile Access
- 🌐 Connected to MongoDB Atlas (Cloud)
- 🔁 Fully RESTful API

---

## 📁 Folder Structure

event-booking-api/
│
├── models/
│ ├── Event.js
│ └── User.js
│
├── routes/
│ ├── auth.js
│ └── events.js
│
├── middleware/
│ └── authMiddleware.js
│
├── .env
├── .gitignore
├── server.js
└── README.md

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/event-booking-api.git
cd event-booking-api
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Create .env File
env
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run Server
bash
Copy code
nodemon server.js
Server will run on http://localhost:5000/

🔐 Authentication Routes
📝 Register
POST /api/auth/register

json
Copy code
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
🔑 Login
POST /api/auth/login

json
Copy code
{
  "email": "john@example.com",
  "password": "123456"
}
Response will return a JWT token.

📦 Event Routes
📍 Create Event (Admin only)
POST /api/events
Header: Authorization: Bearer <JWT_TOKEN>

json
Copy code
{
  "title": "Tech Conference 2025",
  "description": "A meetup for developers.",
  "date": "2025-12-10"
}
📥 Book Event
POST /api/events/:eventId/book
Header: Authorization: Bearer <JWT_TOKEN>

📤 Get All Events
GET /api/events
Header (optional): Authorization: Bearer <JWT_TOKEN>

🧑‍💻 Technologies Used
Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Tokens (JWT)

Bcrypt

Dotenv

CORS

🌐 Deployment (Optional)
To deploy this API:

Use Render or Railway for backend deployment.

Add your .env variables in the dashboard.

Set your MongoDB Atlas IP Access to 0.0.0.0/0 for global access.

🤝 Contributing
Pull requests are welcome! Please fork this repo and submit a PR.

📄 License
MIT

🙋‍♂️ Author
Anand Kumar
Backend Developer | ML Enthusiast
