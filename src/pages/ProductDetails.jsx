import { useParams, Link, Outlet } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <>
      <h2>{product.name}</h2>
      <img
        src={product.img}
        alt={`Product ${product.name}`}
        className="product-detail-img"
        loading="lazy"
        decoding="async"
      />

      <p>{product.desc}</p>
      <p className="product-price">${product.price}</p>

      <Link to="reviews" className="product-btn">
        View Reviews
      </Link>
      <Outlet />
    </>
  );
}