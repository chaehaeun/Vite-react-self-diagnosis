import ProductInfo from '../components/ProductCard/ProductInfo';
import ProductAmount from '../components/ProductCard/ProductAmount';

function App() {
  return (
    <div className="App">
      <main className="viewport mx-auto p-4 ">
        <ProductInfo />
        <ProductAmount />
      </main>
    </div>
  );
}

export default App;
