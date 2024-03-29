import CardProduct from './CardProduct';
import products from '../../../public/productos.json';

export default function ProductList({ filterId }) {
  const productsList = products.products.filter(
    (product) => product.category == filterId
  );
  return (
    <div className="w-full ">
      {productsList.map((product) => (
        <CardProduct
          key={product.id}
          img={product.img}
          name={product.name}
          description={product.description}
          items={product.items}
        />
      ))}
    </div>
  );
}
