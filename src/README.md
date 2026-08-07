# 👥 User Management System

A modern and responsive **User Management System** built using **React, Vite, Axios, React Router, and JSON Server**. The application provides a clean dashboard interface for managing user records through CRUD operations.

## 🚀 Features

- 👤 Add new users
- 🔍 Search users
- 👁️ View individual user details
- ✏️ Edit existing users
- 🗑️ Delete users
- 📝 Form validation
- 🌐 REST API integration using JSON Server
- ⚡ Axios-based API communication
- 🧭 Client-side routing with React Router
- 📱 Responsive user interface
- 🎨 Modern and premium UI design
- ❌ Custom 404 / Not Found page
- 🧩 Reusable React components

## 🛠️ Technology Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5
- CSS3

### API / Backend
- JSON Server
- Axios

### Routing
- React Router DOM

### Build Tool
- Vite

### Development Tools
- VS Code
- npm
- Git
- GitHub

## 🏗️ Application Architecture

```text
User Management System
│
├── React Application
│   ├── Navbar
│   ├── Home
│   ├── User List
│   ├── User Form
│   ├── User Details
│   └── Not Found
│
├── Axios
│   └── REST API Communication
│
└── JSON Server
    └── db.json
        └── Users
```

## 📁 Project Structure

```text
user-management-system/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

> The exact component and page filenames may vary based on the current project implementation.

## ⚙️ Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

Check the installed versions:

```bash
node -v
npm -v
git --version
```

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Navigate to the Project

```bash
cd user-management-system
```

### 3. Install Dependencies

```bash
npm install
```

## 🗄️ Start JSON Server

The application uses JSON Server as a lightweight REST API.

Run:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```text
http://localhost:3000
```

Users endpoint:

```text
http://localhost:3000/users
```

## ▶️ Start the React Application

Open another terminal and run:

```bash
npm run dev
```

The Vite development server will run at:

```text
http://localhost:5173
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get a specific user |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |

Example:

```text
GET http://localhost:3000/users/1
```

## 🧭 Application Routes

| Route | Description |
|-------|-------------|
| `/` | Home / User List |
| `/users/:id` | User Details |
| `*` | Not Found Page |

Example:

```text
http://localhost:5173/users/1
```

## 🔄 CRUD Operations

### Create
Creates a new user using the user form.

```text
POST /users
```

### Read
Retrieves all users or a specific user using Axios.

```javascript
axios.get("http://localhost:3000/users");
```

```javascript
axios.get(`http://localhost:3000/users/${id}`);
```

### Update
Updates an existing user's information.

```text
PUT /users/:id
```

### Delete
Removes a user from the system.

```text
DELETE /users/:id
```

## 🗃️ Database

The project uses `db.json` as a local data source through JSON Server.

Example:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Akash Kumar",
      "email": "akash@gmail.com",
      "phone": "9876543210",
      "company": "Example Company",
      "website": "example.com"
    }
  ]
}
```

## 🎨 UI & Design

The application uses a modern dashboard-oriented design with:

- Premium color combinations
- Gradient components
- Modern user cards
- Rounded UI elements
- Interactive buttons
- Hover animations
- Responsive forms
- Centered user detail views
- Clean navigation
- Consistent spacing and typography

## 📱 Responsive Design

The interface is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

CSS media queries are used to adapt the layout for smaller screens.

## 📜 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Learning Objectives

This project demonstrates practical knowledge of:

- React component development
- React Hooks
- `useState`
- `useEffect`
- React Router
- Dynamic routing
- REST API integration
- Axios
- CRUD operations
- JSON Server
- Form handling
- Form validation
- Responsive CSS
- Git
- GitHub

## 🔮 Future Enhancements

- 🔐 User authentication
- 🔑 JWT-based authorization
- 👨‍💼 Role-based access control
- 🔎 Advanced filtering
- 📄 Pagination
- 📊 Dashboard analytics
- 🌙 Dark mode
- ☁️ Cloud database integration
- 🚀 Spring Boot backend integration
- 🐳 Docker deployment
- ☁️ AWS deployment

## 👨‍💻 Author

### Akash Kumar

**Java Full Stack Developer**

### Technical Skills

```text
Java
Spring Boot
React
JavaScript
HTML
CSS
MySQL
PostgreSQL
Git
GitHub
REST APIs
```

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

## 📌 License

This project is created for learning and portfolio purposes.
