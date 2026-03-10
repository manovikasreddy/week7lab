import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";
import "./styles/app.css";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    </AuthProvider>
  );
}