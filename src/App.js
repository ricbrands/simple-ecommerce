import React, { useState } from "react";
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from './services/useFetch';

function App() {
  const [size, setSize] = useState("");
  const { data: products, loading, error} = useFetch("products?category=shoes")

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
  : products;

  if (error) throw error;
  if (loading) return <Spinner />

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">All sizes</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
            </select>
            { size && <h2> Found {filteredProducts.length} items</h2>}
          </section>
          <section id="products">{filteredProducts.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
