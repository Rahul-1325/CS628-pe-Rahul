import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import Navbar from './Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
                <Route path="/edit-recipe/:id" element={<EditRecipe />} />
            </Routes>
        </div>
    );
};

export default App;
