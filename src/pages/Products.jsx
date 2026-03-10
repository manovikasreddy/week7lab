import { Link, Outlet } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  return (
    <>
      <h2>Products</h2>

      <div className="products-grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <img src={p.img} alt={p.name} className="product-img" loading="lazy" decoding="async" />
            <div className="product-body">
              <h3 className="product-title">{p.name}</h3>
              <p className="product-desc">{p.desc}</p>
              <div className="product-meta">
                <span className="product-price">${p.price}</span>
                <Link to={p.id} className="product-btn">View</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Outlet />
    </>
  );
}