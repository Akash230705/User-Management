# Roster — User Management App

A CRUD user management application built with React, React Router, and Axios
against the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

Built for a frontend internship assignment: fetch, create, edit, and delete
users, with a detail view, search, loading states, and error handling.

## Features

- **Fetch** — loads all users from `GET /users` and lists them in a
  responsive roster view.
- **Create** — modal form posts to `POST /users`; the response is merged
  into local state (JSONPlaceholder doesn't persist writes, so the app
  simulates the result client-side, same as any CRUD app hitting a mock API).
- **Update** — "Edit" opens the same form pre-filled, `PUT /users/:id`.
- **Delete** — "Delete" confirms, then `DELETE /users/:id` and removes the
  row locally.
- **Detail view** — `/users/:id` route via `react-router-dom` shows full
  contact info, address, and company.
- **Search** — client-side filter by name, username, or email.
- **Loading & error states** — spinner while fetching, dismissible retry
  banner on failure, toast confirmations for writes.
- **Responsive layout** — usable from a 360px phone up to desktop.

## Tech stack

- React 18 (functional components + hooks: `useState`, `useEffect`, `useCallback`)
- React Router v6 (`BrowserRouter`, `Routes`, `useParams`, `Link`)
- Axios (single configured instance in `src/services/api.js`)
- Vite for tooling
- Plain CSS (component-scoped files, CSS custom properties for theming)

## Project structure

```
src/
  components/       Reusable UI: Navbar, UserCard, UserForm, Modal, Loader,
                     ErrorMessage, Toast (each with its own .css file)
  pages/             Home.jsx  (roster + create/edit/delete orchestration)
                     UserDetailPage.jsx (single user view)
  services/
    api.js           Axios instance + fetchUsers/createUser/updateUser/
                     deleteUser/fetchUserById
  styles/
    index.css        Design tokens (colors, type, radius) + base styles
  App.jsx            Route definitions
  main.jsx           App entry point (mounts BrowserRouter)
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

### Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "New Project" → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel detects both automatically).
4. Deploy — `vercel.json` in this repo adds the SPA rewrite so
   `/users/:id` refreshes correctly instead of 404ing.

## Notes on the mock API

JSONPlaceholder simulates writes: `POST`/`PUT`/`DELETE` return a plausible
response but don't actually persist anything server-side, and `POST` always
echoes back `id: 11`. The app accounts for this by updating its own local
state optimistically after each successful request (generating a locally
unique id on create) so the UI behaves like a real CRUD app end-to-end.
