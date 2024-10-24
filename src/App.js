import React, { useState } from 'react';
import axios from 'axios'; // import axios for making API requests(https://www.npmjs.com/package/axios)
import './App.css'; // Import the CSS file

// Get the API key from environment variables
const API_KEY = process.env.REACT_APP_FINMOD_API_KEY;

// Main App component
function App() {
  return (
    <div className="container">
      <Searchstock />
    </div>
  );
}

// Searchstock component
const Searchstock = () => {
  const [stockticker, setStockticker] = useState(''); // State for stock ticker input
  const [stockData, setStockData] = useState(null); // State for storing stock data
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  
  // Handle input change
  const handleSearchInput = (event) => {
    setStockticker(event.target.value);
  };

  // Handle search button click
  const handlesearch = async () => {
    console.log('searching for stock:', stockticker);
    // commented code is part of 12data premium API
    // const profileApiUrl = `https://api.twelvedata.com/profile?symbol=${stockticker}&apikey=${API_KEY}`;
    const logoApiUrl = `https://api.twelvedata.com/logo?symbol=${stockticker}&apikey=${API_KEY}`; // 12data logo API url 
    const quoteApiUrl = `https://api.twelvedata.com/quote?symbol=${stockticker}&apikey=${API_KEY}`; // 12data quote API url
    const priceApiUrl = `https://api.twelvedata.com/price?symbol=${stockticker}&apikey=${API_KEY}`; // 12data price API url
    
    // Fetch data from the APIs
    try {
      const [logoResponse, quoteResponse, priceResponse] = await Promise.all([ // Use Promise.all to fetch data concurrently
        axios.get(logoApiUrl),
        axios.get(quoteApiUrl),
        // axios.get(profileApiUrl),
        axios.get(priceApiUrl)
      ]);
      
      // Check for errors in the responses
      if (!logoResponse.data.url || quoteResponse.data.error || priceResponse.data.error) {
        setErrorMessage('Invalid ticker or no results found.');
        setStockData(null);
      } else {
        // Set the stock data if responses are valid
        setStockData({
          logoUrl: logoResponse.data.url,
          quote: quoteResponse.data,
          realTimePrice: priceResponse.data.price
          // profileResponse.data
        });
        setErrorMessage(''); // Clear any previous error messages
      }
    } catch (error) {
      console.error('Error fetching stock data:', error); // Log the error
      setErrorMessage('An error occurred while fetching data.'); // Set error message
    }
  };
  
  
  // return of the Searchstock component
  return (
    <div>
      <h1>Search Company Stock</h1>
      <input
        type="text"
        value={stockticker}
        onChange={handleSearchInput}
        placeholder="Enter company ticker"
      />
      <button onClick={handlesearch}>Search</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {stockData && <StockProfile data={stockData} />}
    </div>
  );
};

// StockProfile component to display stock information
const StockProfile = ({ data }) => {
  const { quote, realTimePrice } = data; // Destructure quote and realTimePrice from data
  
  return (
    <div className="stock-profile">
      {data.logoUrl && <img src={data.logoUrl} alt={`${quote.name} Logo`} style={{ width: '100px', marginBottom: '10px' }} />}
      <h2>{quote.name} ({quote.symbol})</h2>
      {/* <h2>{data.name} ({data.symbol})</h2> */}
      {/* <p><strong>CEO:</strong> {data.CEO}</p>
      <p><strong>Address:</strong> {data.address}, {data.city}, {data.state}, {data.zip}</p>
      <p><strong>Country:</strong> {data.country}</p>
      <p><strong>Industry:</strong> {data.industry}</p>
      <p><strong>Sector:</strong> {data.sector}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Employees:</strong> {data.employees}</p>
      <p><strong>Exchange:</strong> {data.exchange}</p>
      <p><strong>Website:</strong> <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a></p> */}

      <p><strong>Exchange:</strong> {quote.exchange}</p>
      <p><strong>Currency:</strong> {quote.currency}</p>
      
      {/* Real-Time Price */}
      <h3>Real-Time Price</h3>
      <p><strong>Current Price:</strong> ${realTimePrice}</p>
      
      {/* Quote Information */}
      <h3>Latest Quote</h3>
      <p><strong>Date:</strong> {quote.datetime}</p>
      <p><strong>Open:</strong> ${quote.open}</p>
      <p><strong>High:</strong> ${quote.high}</p>
      <p><strong>Low:</strong> ${quote.low}</p>
      <p><strong>Close:</strong> ${quote.close}</p>
      <p><strong>Volume:</strong> {quote.volume}</p>
      <p><strong>Previous Close:</strong> ${quote.previous_close}</p>
      <p><strong>Change:</strong> ${quote.change} ({quote.percent_change}%)</p>

      {/* Additional Information */}
      <h3>52-Week Range</h3>
      <p><strong>Low:</strong> ${quote.fifty_two_week.low}</p>
      <p><strong>High:</strong> ${quote.fifty_two_week.high}</p>

      {/* Extended Market Information */}
      <h3>Extended Market</h3>
      <p><strong>Extended Change:</strong> ${quote.extended_change} ({quote.extended_percent_change}%)</p>
      <p><strong>Extended Price:</strong> ${quote.extended_price}</p>

      {/* Market Status */}
      <h3>Status</h3>
      <p><strong>Market Open:</strong> {quote.is_market_open ? "Yes" : "No"}</p>
    </div>
  );
};


export default App;