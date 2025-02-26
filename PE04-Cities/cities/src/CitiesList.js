import React from "react";
import { Link, Outlet } from "react-router-dom";

function CitiesList({ cities }) {
    return (
        <div>
            <h2>List of Cities</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city.id}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet /> {/* Nested route for city details */}
        </div>
    );
}

export default CitiesList;
