import { use } from 'react';
import { CartContext } from './ShoppingCartContextProvider';
import Logo from '../assets/logo.jpg';

export default function Header() {
    const shoppingCartCtx = use(CartContext);

    return (
        <div id="main-header">
          <div id="title">
            <img src={Logo} alt="Logo" />
            <h1>Foody's Food Trough</h1>
          </div>
          {shoppingCartCtx.items.length 
            ? <button>View Cart ({shoppingCartCtx.items.length})</button> 
            : <button>View Cart</button>
            }
        </div>
    );
}