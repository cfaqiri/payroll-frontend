# Introduction
This project serves as a front-end for  payroll REST API. See [payrollchallenge](https://github.com/cfaqiri/payrollchallenge) for more details. 

# Features
- Users may sign in or sign up via a POST request to the backend API's '/login' or '/register' endpoints
- Users can upload a form containing timekeeping records via a POST request to the '/upload' endpoint
- Users can fetch all of their payroll data via a GET request to the backend's '/retrieve/' endpoint

# Prerequisites
You should have the backend installed and running on your local computer. Visit the link in the instructions to download the source code. 

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