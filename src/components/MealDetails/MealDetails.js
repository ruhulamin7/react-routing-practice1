import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {

    const { mealId } = useParams()
    const [meals, setMeals] = useState({})

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals[0]))
    }, [mealId]);


    return (
        <div>
            <h2>This is Meals Details {mealId}</h2>
            <img src={meals.strMealThumb} width={'300px'} alt="" />
            <h3>Name: {meals.strMeal}</h3>
            <p>{meals.strInstructions}</p>
        </div>
    );
};

export default MealDetails;