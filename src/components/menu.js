import Product from './product';

function Menu({ menu }) {
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Menu;
