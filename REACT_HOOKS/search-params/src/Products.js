import React from 'react';
import { useSearchParams } from 'react-router-dom';
const products = [
  { id: 1, name: 'Face mask' },
  { id: 2, name: 'Moistruizer' },
  { id: 3, name: 'Lip gloss' },
  {
    id:4, name:'Eyeliner'
  }
];
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams({ query: value });
  };
  const final = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <h2>Beauty Products</h2>
      <input type="text" value={query} onChange={handleSearch} />
      <ul>
        {final.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;