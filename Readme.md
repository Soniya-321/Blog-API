# Blog API

This is a simple Blog API built with Express.js and SQLite for managing user authentication, blog posts, comments, and likes.

## Features
- User authentication (signup, login)
- Blog post management (Create, Read, Update, Delete)
- Comment system (Add, View, Delete)
- Like & Unlike functionality

## Setup Instructions

### Prerequisites
- Node.js installed
- SQLite3 installed

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/blog-api.git
   cd blog-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```sh
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npx nodemon server.js
   ```

## API Endpoints

### Authentication
- **Signup:** `POST /api/auth/signup`
- **Login:** `POST /api/auth/login`

### Blog Post Management (CRUD)
- **Create a Post (Authenticated users only):** `POST /api/blogs`
- **Get All Posts:** `GET /api/blogs`
- **Get Single Post:** `GET /api/blogs/:id`
- **Update Post (Only by Owner):** `PUT /api/blogs/:id`
- **Delete Post (Only by Owner):** `DELETE /api/blogs/:id`

### Comment System
- **Add a Comment (Authenticated users only):** `POST /api/comments`
- **View Comments for a Post:** `GET /api/comments/:blogId`
- **Delete a Comment (Only by Owner):** `DELETE /api/comments/:id`

### Like & Unlike Functionality
- **Like a Post:** `POST /api/likes`
- **Unlike a Post:** `DELETE /api/likes/:blogId`
- **Get Like Count for a Post:** `GET /api/likes/:blogId`

## Testing with Postman
You can create a Postman collection by importing the API endpoints and testing each route using the given request methods and parameters.

