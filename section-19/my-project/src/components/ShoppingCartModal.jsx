import { use, useRef, useImperativeHandle } from 'react';
import { CartContext } from './ShoppingCartContextProvider';
import { createPortal } from 'react-dom';

export default function ShoppingCartModal({ ref }) {
    const ctx = use(CartContext);
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog}>
            <h2>Shopping Cart</h2>
            {ctx?.items.length ?? ctx.items.map(item => (
                <div key={item.id} className='cart-item'>
                    <h2>{item.name}</h2>
                    <p>
                        {item.description}
                        {item.price}
                    </p>
                </div>
            ))}
        </dialog>,
        document.getElementById('modal')
    );
}