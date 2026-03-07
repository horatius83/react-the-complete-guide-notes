import { createContext, useState } from 'react';

export const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (item) => {}
});


export default function ShoppingCartContextProvider({children}) {
    const [items, setItems] = useState([]);
    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }
    function handleRemoveItem(item) {
        setItems((prevItems) => prevItems.filter(x => x.id === item.id));
    }
    const ctx = {
        items,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    }
    return (
        <CartContext value={ctx}>
            {children}
        </CartContext>
    );
}