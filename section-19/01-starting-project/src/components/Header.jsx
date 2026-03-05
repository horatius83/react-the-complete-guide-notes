import { use, useRef } from 'react';
import { CartContext } from './ShoppingCartContextProvider';
import Logo from '../assets/logo.jpg';
import ShoppingCartModal from './ShoppingCartModal';

export default function Header() {
    const shoppingCartCtx = use(CartContext);
    const dialog = useRef();
    function openDialog() {
        dialog.current?.open();
    }

    return (
        <div id="main-header">
          <div id="title">
            <img src={Logo} alt="Logo" />
            <h1>Foody's Food Trough</h1>
          </div>
          {shoppingCartCtx.items.length &&
            <button onClick={openDialog}>View Cart ({shoppingCartCtx.items.length})</button>
          }
          <ShoppingCartModal ref={dialog} />
        </div>
    );
}