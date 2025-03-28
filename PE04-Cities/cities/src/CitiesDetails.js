import React from "react";
import { useParams } from "react-router-dom";

function CityDetails({ cities }) {
    const { id } = useParams();
    const city = cities.find((city) => city.id === parseInt(id));

    if (!city) {
        return <h2>City not found</h2>;
    }

    return (
        <div>
            <h2>City Details</h2>
            <p><strong>Name:</strong> {city.name}</p>
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Population:</strong> {city.population}</p>
        </div>
    );
}

export default CityDetails;
