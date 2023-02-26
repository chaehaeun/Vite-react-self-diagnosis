import ProductInfo from '../components/ProductCard/ProductInfo';
import ProductAmount from '../components/ProductCard/ProductAmount';

function App() {
  const product = {
    name: '래피젠 코로나 자가 검사 키트',
    amount: '2개입X1박스',
    regularPrice: '56760',
    discount: '88.77730796335',
  };

  const discountPrice = Math.floor(
    product.regularPrice * ((100 - Number(product.discount)) * 0.01),
  );

  return (
    <div className="App">
      <main className="viewport mx-auto p-4 ">
        <ProductInfo product={product} discountPrice={discountPrice} />
        <ProductAmount discountPrice={discountPrice} />
      </main>
    </div>
  );
}

export default App;
