# MercadoLibre Clone

A marketplace inspired by MercadoLibre, built with React, Node.js and MongoDB. The interface is in Spanish.

## Features

- Product listing page ("Últimos productos publicados") and a product detail page.
- A REST API built with Express and Mongoose.
- User sign-in with JSON Web Tokens and bcrypt-hashed passwords.
- Seed endpoints to load sample products and users.
- A static HTML/CSS mockup of the design in `maqueta/`.

## Tech stack

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express, Mongoose, JSON Web Tokens, bcryptjs
- **Database:** MongoDB

## API

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/productos` | List products |
| `GET` | `/api/productos/:id` | Get one product |
| `GET` | `/api/productos/seed` | Insert the sample products |
| `POST` | `/api/users/signin` | Sign in and receive a token |
| `GET` | `/api/users/seed` | Insert the sample users |

## Getting started

You need Node.js and a running MongoDB instance.

```bash
git clone https://github.com/Dtowerssj/ML.git
cd ML
npm install
cd frontend && npm install && cd ..
```

Create a `.env` file in the project root:

| Variable | Description |
|---|---|
| `MONGODB_URL` | MongoDB connection string. Defaults to `mongodb://localhost/ml`. |
| `JWT_SECRET` | A long random string used to sign tokens. |

Start the API (it listens on port 5000, or on `PORT` if set) and, in a second terminal, the React app, which proxies API calls to `http://127.0.0.1:5000`:

```bash
npm start
cd frontend && npm start
```

Open `/api/users/seed` and `/api/productos/seed` once to load the sample data.

## Project structure

```
backend/    Express server, routers, Mongoose models
frontend/   React application
maqueta/    Static HTML/CSS mockup of the design
```
