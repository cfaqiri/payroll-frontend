# Introduction
This project serves as a front-end for a payroll REST API. See [Payroll Challenge](https://github.com/cfaqiri/payrollchallenge) for more details. 

# Features
This application has the following routes:
- The "/login" and "/register" routes allow a user to sign in or sign up by sending a POST request to the backend's "/login/" or "/register/" endpoints
- The homepage features a form that sends a POST request to the backend's "/upload" endpoint to allow the user to upload a payroll report
- The "/report" route allows the user to fetch all of their payroll data by sending a GET request to the backend's "/retrieve/" endpoint

# Prerequisites
PostgreSQL is required to accommodate the DecimalFields used in this project. SQLite3 does not support this model field. 

# Assumptions
- You should have the backend installed and running on your local computer. Visit the link in the instructions to download the source code. 

# Installation
1. Clone the repository
```
git clone https://github.com/cfaqiri/payroll-frontend.git
```
2. Install the dependencies
```
npm install
```
3. Run the development surver
```
npm start
```
4. Ensure that the backend API has been properly installed and the development server is running.