import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CitiesDetails from "./CitiesDetails";
import { citiesData } from "./data"; // Import initial city data
import "./App.css";

const App = () => {
  const [cities, setCities] = useState(citiesData); // Initialize data from citiesData

  return (
    <Router>
      <div className="container">
        <h1>Cities Application</h1>
        <nav>
          <a href="/cities">Cities List</a>
          <a href="/add-city">Add City</a>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          <Route path="/cities/:id" element={<CitiesDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
