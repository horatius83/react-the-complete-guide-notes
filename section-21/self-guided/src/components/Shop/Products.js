import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { products } from '../../store/products';

const Products = (props) => {
  const dispatch = useDispatch();

  function handleClick(item) {
    console.log(`addItem: ${JSON.stringify(item)}`);
    dispatch(cartActions.addItem(item));
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => 
          <ProductItem 
            key={product.name} 
            title={product.name} 
            price={product.price} 
            description={product.description} 
            onClick={() => handleClick(product)}
          />)}
      </ul>
    </section>
  );
};

export default Products;
