import React from 'react';
import './App.css';
const FinternetPlayground = () => {
  return (
    <div className="playground-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Playground</h1>
        </div>
        <nav className="sidebar-nav">
          <h2>Home</h2>
          <ul>
            <li><a href="#">Playground Onboarding</a></li>
          </ul>
          
          <h2>User Work flows</h2>
          <ul>
            <li><a href="#">User onboarding</a></li>
            <li><a href="#">Real Estate issuance flow</a></li>
            <li><a href="#">Investor flow </a></li>
            <li><a href="#">Investor VC flow.</a></li>
          </ul>
          
          <h2>Guild</h2>
          <ul>
            <li><a href="#">Request for Quote</a></li>
            <li><a href="#">Guild onboarding</a></li>
            <li><a href="#"> Guild ticket management</a></li>
          </ul>
          
          <h2>Token manager</h2>
          <ul>
            <li><a href="#">Token manager onboarding</a></li>
            <li><a href="#">Token manager asset management</a></li>
            <li><a href="#">Token manager Asset whitelisting</a></li>
            
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="main-content">
        <div className="welcome-message">
          <h1>Welcome to the Finternet playground.</h1>
          <p>
            Explore use cases that demonstrate how the Finternet unlocks transactability across assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinternetPlayground;