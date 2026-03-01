import { useEffect, useState } from 'react';

// pull from /meals
export default function Products() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            const result = await fetch('http://localhost:3000/meals');
            if (result.ok) {

                const payload = await result.json();
                setMeals(payload);
            }
        };
        getMeals();
    }, []);


    if (!meals.length) {
        return (<div id="meals">Loading...</div>);
    }

    return (
        <div id="meals">
            {meals.length && meals.map(meal => (
                <div className="meal-item" key={meal.id}>
                    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
                    <article>
                        <h3>{meal.name}</h3>
                        <div className="meal-item-description">
                            {meal.description}
                        </div>
                        <div className="meal-item-price">
                            {meal.price}
                        </div>
                        <div className="meal-item-actions">
                            Add / Remove?
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}