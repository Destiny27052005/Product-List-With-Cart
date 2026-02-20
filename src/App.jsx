import { useState, useEffect } from 'react';
import Card from './component/Card';
import Cart from './component/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [])




  return (
    <div className='max-w-6xl m-4 md:mx-auto'>
      {
        loading && <p>Loading....</p>
      }
      {
        error && <p>❌ {error}</p>
      }
      {!loading && !error &&
        <main>
          <h1 className='font-bold text-5xl'>Desserts</h1>
          {
            products.map((product) => (
              <Card key={product.name} product={product} />
            ))
          }
          <Cart />
        </main>
      }

    </div>
  )
}

export default App
