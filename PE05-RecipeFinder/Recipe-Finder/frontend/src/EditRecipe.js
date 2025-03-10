import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/recipes/${id}`, recipe)
            .then(() => navigate(`/recipe/${id}`))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Recipe</h2>
            <input type="text" value={recipe.name} onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} required />
            <textarea value={recipe.ingredients} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} required />
            <textarea value={recipe.instructions} onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} required />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipe;
