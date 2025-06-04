import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage/homePage";
import Cartpage from "./pages/CartPage/CartPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Cart" element={<Cartpage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
