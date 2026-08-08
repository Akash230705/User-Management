# User Management System

A modern and responsive **User Management System** built with React, Vite, Axios, React Router, and JSON Server. The application provides complete CRUD functionality for managing user information with a clean and responsive interface.

## Live Demo

### Frontend
Replace this with your actual Vercel deployment URL:

```text
https://your-vercel-url.vercel.app
```

### Backend API

```text
https://user-management-api-uutq.onrender.com/users
```

## Features

- Add new users
- View all users
- View individual user details
- Edit existing users
- Delete users
- Search users
- Form validation
- Loading spinner
- Error handling
- Responsive design
- REST API integration
- Dynamic routing
- Axios API communication
- Toast notifications
- Modern UI design
- Production deployment

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript ES6+
- HTML5
- CSS3
- Axios
- React Router DOM
- React Icons
- React Loader Spinner
- React Toastify
- SweetAlert2
- Poppins Font

### Backend
- JSON Server
- REST API
- db.json

### Development & Deployment
- Git
- GitHub
- Vercel
- Render
- npm
- VS Code

## Application Architecture

```text
                         GitHub
                           |
             +-------------+-------------+
             |                           |
             v                           v
          Vercel                       Render
             |                           |
       React + Vite                JSON Server
             |                           |
             |                         db.json
             |                           |
             +--------- Axios -----------+
```

## Project Structure

```text
User-Management/
|
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.css
│   │   ├── ErrorMessage.jsx
│   │   ├── Loader.css
│   │   ├── Loader.jsx
│   │   ├── Modal.css
│   │   ├── Modal.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── UserCard.css
│   │   ├── UserCard.jsx
│   │   ├── UserForm.css
│   │   ├── UserForm.jsx
│   │   ├── UserView.css
│   │   └── UserView.jsx
│   ├── pages/
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── UserDetailPage.css
│   │   └── UserDetailPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
├── .gitignore
└── README.md
```

## API Configuration

Axios communicates with the deployed JSON Server API through `src/services/api.js`.

```javascript
import axios from "axios";

const BASE_URL = "https://user-management-api-uutq.onrender.com/users";
```

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Fetch all users |
| GET | `/users/:id` | Fetch a specific user |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update an existing user |
| DELETE | `/users/:id` | Delete a user |

## Database

The project uses `db.json` as the data source for JSON Server.

Example:

```json
{
  "users": [
    {
      "id": "1",
      "name": "Akash Kumar",
      "email": "akash@gmail.com",
      "phone": "9876543210",
      "company": "OpenAI",
      "website": "akash.dev"
    }
  ]
}
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Home / User List |
| `/users/:id` | Individual User Details |
| `*` | Not Found Page |

## CRUD Operations

### Create

```text
POST /users
```

### Read

```text
GET /users
GET /users/:id
```

### Update

```text
PUT /users/:id
```

### Delete

```text
DELETE /users/:id
```

## Local Installation

### Clone the repository

```bash
git clone https://github.com/Akash230705/User-Management.git
```

### Navigate to the project

```bash
cd User-Management
```

### Install dependencies

```bash
npm install
```

## Run Frontend Locally

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Run JSON Server Locally

```bash
npm run server
```

Local API:

```text
http://localhost:10000/users
```

For local development, use:

```javascript
const BASE_URL = "http://localhost:10000/users";
```

For production:

```javascript
const BASE_URL = "https://user-management-api-uutq.onrender.com/users";
```

## Available npm Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run server
```

## Production Deployment

### Frontend — Vercel

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Install command:

```bash
npm install
```

### Backend — Render

Build command:

```bash
npm install
```

Start command:

```bash
npm run server
```

JSON Server command:

```bash
json-server db.json --host 0.0.0.0 --port 10000
```

Production API:

```text
https://user-management-api-uutq.onrender.com/users
```

## Deployment Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   +--------------------+
   |                    |
   v                    v
 Vercel               Render
   |                    |
   v                    v
React + Vite       JSON Server
   |                    |
   |                    v
   |                 db.json
   |                    |
   +------ Axios -------+
```

## UI & Design

The application includes:

- Premium color combinations
- Responsive layouts
- Modern user cards
- Centered user detail forms
- Rounded UI components
- Interactive buttons
- Hover effects
- Loading states
- Error states
- Consistent spacing
- Clean typography
- Mobile-friendly layouts

## Responsive Design

The application is designed for:

- Desktop
- Laptop
- Tablet
- Mobile devices

## Data Handling

The API layer is separated into:

```text
src/services/api.js
```

This centralizes HTTP communication and keeps API logic separate from UI components.

## Learning Objectives

This project demonstrates practical knowledge of:

- React component development
- React Hooks
- useState
- useEffect
- React Router
- Dynamic routing
- REST API integration
- Axios
- CRUD operations
- JSON Server
- Form handling
- Form validation
- Responsive CSS
- Error handling
- Loading states
- Git and GitHub
- Vercel deployment
- Render deployment

## Future Enhancements

- JWT authentication
- Role-based authorization
- Advanced filtering
- Pagination
- Dashboard analytics
- Dark mode
- Database integration
- Spring Boot backend
- MySQL/PostgreSQL integration
- Docker containerization
- AWS deployment
- CI/CD automation

## Author

### Akash Kumar

**Java Full Stack Developer**

GitHub:

```text
https://github.com/Akash230705
```

Repository:

```text
https://github.com/Akash230705/User-Management
```

## Support

If you find this project useful, consider giving the repository a star on GitHub.

## License

This project is created for learning, development, and portfolio purposes.
