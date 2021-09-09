import useAmount from '../hooks/use-amount';

function Product({ product }) {
  const { amount, decrement, increment } = useAmount(0);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button onClick={decrement}>-</button>
      <span>{amount}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Product;
