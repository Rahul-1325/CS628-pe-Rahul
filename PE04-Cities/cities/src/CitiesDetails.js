import { useParams } from "react-router-dom";

const CitiesDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((c) => c.id === parseInt(id));

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CitiesDetails;
