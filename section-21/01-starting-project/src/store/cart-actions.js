import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            dispatch(uiActions.showNotification({
                status: 'fetching',
                title: 'Fetching...',
                message: 'Fetching cart data!'
            }));
            const response = await fetch('https://react-complete-guide-fd012-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
                totalPrice: cartData.totalPrice || 0
            }));
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Fetched cart data successfully'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching cart data failed!'
            }));
        }
    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));
        const sendRequest = async () => {
            const result = await fetch('https://react-complete-guide-fd012-default-rtdb.firebaseio.com/cart.json', { 
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!result.ok) {
                throw new Error('Sending cart data failed.');
            }
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }));
        }
        try {
            await sendRequest();
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed!'
            }));
        }
    };
};