
import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import BeginSidebar from "./BeginSidebar";
import ContentArea from './Index1/ContentArea';
import './assets/css/main.css';
import "./assets/css/structure.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])

  return (
    <div className="dashboard-analytics admin-header">
    {loading === false ? (
    //BEGIN MAIN CONTAINER 
    <div className="main-container" id="container">
      <div className="overlay"></div>
      <div className="search-overlay"></div>
      <BeginSidebar/>
      <ContentArea/>
    </div>
    // END MAIN CONTAINER 
    ):(
    <Loader/>)}
    </div>
   
  );
}

export default App;
