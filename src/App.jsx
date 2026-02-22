import { useState, useEffect } from 'react';
import Card from './component/Card';
import Cart from './component/Cart';
import OrderConfirm from './component/OrderConfirm';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [confirm, setConfirm] = useState(false)

  const startOrder = () => {
    setCart([]),
      setConfirm(false)
  }

  const API_BASE = import.meta.env.VITE_API_URL || '/api';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/products`);
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
    <div className='max-w-7xl m-4 md:mx-auto p-2'>
      {
        loading && <p>Loading....</p>
      }
      {
        error && <p>❌ {error}</p>
      }
      {!loading && !error &&
        <main className='relative'>
          <div className='md:grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <h1 className='font-bold text-5xl'>Desserts</h1>
              <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  products.map((product) => (
                    <Card key={product.id} product={product} setCart={setCart} cart={cart} />
                  ))
                }
              </div>
            </div>
            <Cart cart={cart} setCart={setCart} setConfirm={setConfirm} />
          </div>
          <div className={`${confirm ? 'block' : 'hidden'} w-full h-screen bottom-0 md:h-full absolute md:top-0 md:backdrop-brightness-95`} >
            <OrderConfirm cart={cart} startOrder={startOrder} />
          </div>
        </main>
      }

    </div>
  )
}

export default App
