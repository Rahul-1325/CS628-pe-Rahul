import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/recipes/${id}`)
            .then(() => navigate('/'))
            .catch(error => console.log(error));
    };

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate(`/edit-recipe/${id}`)}>Edit</button>
        </div>
    );
};

export default RecipeDetails;
