# Stock Ledger
Stock Ledger is a web application designed to provide retail investors with quick and easy access to essential stock information. In today's digital landscape, searching for basic stock data often results in encountering numerous ads and irrelevant content. Stock Ledger aims to streamline this process by delivering concise and accurate stock data directly to users without the clutter.

## project Description
The primary goal of Stock Ledger is to offer a user-friendly platform where investors can obtain real-time stock prices, detailed quotes, and company logos with minimal effort. By focusing on essential data, this tool helps investors make informed decisions quickly and efficiently.

## Features
- Real-Time Price Updates: Get the latest price of any stock instantly.
- Comprehensive Stock Quotes: Access detailed information about stocks, including open, high, low, close prices, volume, and more.
- Company Logos: View the official logo of the company for better brand recognition.
- additional functionality can be added to the webapp which require the paid version of 12 data API

## Setup Instructions
To set up and run Stock Ledger locally, follow these steps:
### Clone the Repository:
- `git clone https://github.com/yourusername/stock-ledger.git`
- `cd stock-ledger`

### Install Dependencies:
Make sure you have Node.js installed. Then run:
- `npm install`
- `npm install axios`


### Set Up Environment Variables:
Create a .env file in the root directory and add your Twelve Data API key:\

REACT_APP_FINMOD_API_KEY=your_api_key_here

### Run the Application:
Start the development server with:
`npm start`

### Access the Web App:
Open your browser and go to http://localhost:3000 to use Stock Ledger.


## API Integration
Stock Ledger utilizes the Twelve Data API for fetching real-time stock prices, detailed quotes, and company logos. The integration involves:
- Price Endpoint: Retrieves the current price of a specified stock.
- Quote Endpoint: Provides detailed information about the stock's trading metrics.
- Logo Endpoint: Fetches the company's official logo for display.
These endpoints are called asynchronously using axios to ensure efficient data retrieval and rendering in the React application.

## Credits
This project was developed with assistance from AI tools in several areas:
- CSS Styling: The styling and layout improvements of the web app were enhanced using AI-generated suggestions.
- ReactJS Learning: AI resources were utilized to learn best practices and advanced techniques in ReactJS development.
By leveraging AI, Stock Ledger delivers a polished user experience while maintaining efficient code practices. Feel free to customize this template further based on your specific project details or preferences.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


