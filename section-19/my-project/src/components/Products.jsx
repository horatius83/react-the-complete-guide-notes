import { useEffect, useState, use } from 'react';
import { CartContext } from './ShoppingCartContextProvider';

// pull from /meals
export default function Products() {
    const [meals, setMeals] = useState([]);
    const cartCtx = use(CartContext);

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
                    <article>
                        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
                        <h3>{meal.name}</h3>
                        <div className="meal-item-description">
                            {meal.description}
                        </div>
                        <div className="meal-item-price">
                            {meal.price}
                        </div>
                        <div className="meal-item-actions">
                            <button onClick={() => cartCtx.addItem(meal)}>Add</button>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}