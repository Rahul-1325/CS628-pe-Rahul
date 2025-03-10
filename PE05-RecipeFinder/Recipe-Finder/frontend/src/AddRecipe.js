import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/recipes', { name, ingredients, instructions })
            .then(() => navigate('/'))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>
            <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
