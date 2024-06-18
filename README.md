## Email Automation App

This project is designed to automate the process of sending daily email reports to a list of subscribers. It includes both a backend server and a frontend client to manage users, subscriptions, and scheduled email sending.

## Features

User Registration and Authentication: Users can register accounts and authenticate securely.
Subscription Management: Admin can manage the list of subscribers who receive daily email reports.
Email Scheduler: Admin can schedule the exact time for sending daily email reports.
Dashboard: Provides a dashboard for users to view statistics, manage settings, and subscriptions.
Responsive UI: Frontend built with React ensures a responsive and intuitive user interface.

## Technologies Used
Backend: Node.js, Express.js, MongoDB
Frontend: React.js, Axios
Authentication: JSON Web Tokens (JWT)
Database: MongoDB (MongoDB Atlas for cloud deployment)
Deployment: Heroku (for backend), Netlify (for frontend)
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (version 14.x or higher)
npm or yarn package manager
MongoDB (local installation or MongoDB Atlas account for cloud)

## Getting Started
To get a local copy up and running follow these simple steps.

## Backend Setup

Clone the repository:

git clone https://github.com/your-username/EmailAutomationApp.git

Navigate to the backend directory:

cd EmailAutomationApp/backend

Install dependencies:

npm install

Set up environment variables:

Create a .env file based on .env.example and configure MongoDB connection string and JWT secret.

Start the backend server:

npm start

The server should run on http://localhost:5000.

## Frontend Setup

Navigate to the frontend directory:

cd ../client

Install dependencies:

npm install

Start the frontend development server:

npm start

The frontend should open in your default browser at http://localhost:3000.

## Usage
Register an account as an admin or user.
Admin can manage subscribers, schedule email reports, and view dashboard statistics.
Users can subscribe to receive daily email reports and manage their profile.

## Deployment
Backend deployed on Heroku: Live Demo
Frontend deployed on Netlify: Live Demo

## Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Inspiration and initial setup guidance: OpenAI ChatGPT
