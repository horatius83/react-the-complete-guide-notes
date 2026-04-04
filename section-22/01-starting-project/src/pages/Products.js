import { Link } from 'react-router-dom';



function ProductsPage() {
    return (
        <>
            <h1>Products</h1>
            <ul>
                <li><Link to="/products/product-1">Product 1</Link></li>
                <li><Link to="/products/product-2">Product 2</Link></li>
                <li><Link to="/products/product-3">Product 3</Link></li>
            </ul>
        </>
    );
}

export default ProductsPage;