# 🧠 Social Media Platform
A comprehensive social media platform built with Node.js, Express.js, and MongoDB, providing features for user registration, login, tweet creation, video uploading, and subscription management.

## 🚀 Features
* User registration and login functionality with JSON Web Tokens (JWT) authentication
* Tweet creation, updating, and deletion with user authentication
* Video uploading and publishing with user authentication
* Subscription management for users to follow other users
* Watch history and user channel profiles
* Error handling and logging using custom error classes and async handlers

## 🛠️ Tech Stack
* Frontend: Not applicable (API-only project)
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JSON Web Tokens (JWT)
* Utilities: asyncHandler, ApiError, ApiResponse
* Dependencies: mongoose, bcrypt, jsonwebtoken, multer, cors, cookie-parser, express.json, express.urlencoded, express.static

## 📦 Installation
To install the project, follow these steps:
1. Clone the repository using `git clone`
2. Install dependencies using `npm install`
3. Create a `.env` file with the following environment variables:
	* `MONGODB_URL`: MongoDB connection string
	* `ACCESS_TOKEN_SECRET`: Access token secret key
	* `ACCESS_TOKEN_EXPIRY`: Access token expiry time
	* `REFRESH_TOKEN_SECRET`: Refresh token secret key
	* `REFRESH_TOKEN_EXPIRY`: Refresh token expiry time
4. Run the project using `npm start`

## 💻 Usage
To use the project, follow these steps:
1. Start the server using `npm start`
2. Use a tool like Postman or cURL to send requests to the API endpoints
3. Register a new user using the `/register` endpoint
4. Login to the application using the `/login` endpoint
5. Create a new tweet using the `/tweets` endpoint
6. Upload a new video using the `/videos` endpoint
7. Subscribe to another user using the `/subscriptions` endpoint

## 📂 Project Structure
```markdown
src
├── app.js
├── controllers
│   ├── subscription.controller.js
│   ├── tweet.controller.js
│   ├── user.controller.js
│   └── video.controller.js
├── db
│   └── index.js
├── middlewares
│   └── auth.middleware.js
├── models
│   ├── tweet.model.js
│   ├── user.model.js
│   └── video.model.js
├── routes
│   ├── subscription.routes.js
│   ├── tweet.routes.js
│   ├── user.routes.js
│   └── video.routes.js
├── utils
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── asyncHandler.js
└── index.js
```

## 📸 Screenshots


## 🤝 Contributing
To contribute to the project, please follow these steps:
1. Fork the repository using `git fork`
2. Create a new branch using `git branch`
3. Make changes to the code and commit them using `git commit`
4. Push the changes to the remote repository using `git push`
5. Create a pull request to merge the changes into the main branch

## 📝 License
The project is licensed under the MIT License.

- [Model link](https://app.eraser.io/workspace/Jct2aaOvoVyoMrsHUeQY?origin=share&diagram=B2QskPe1fUDFA8-6XaOix)
