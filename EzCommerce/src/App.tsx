import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/homePage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactPage from "./pages/ContactPage/ContactPage";
import Cartpage from "./pages/CartPage/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Cart" element={<Cartpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
