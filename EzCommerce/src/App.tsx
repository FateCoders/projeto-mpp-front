import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage/homePage";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CartPage from "./pages/CartPage/CartPage";
import PerfilPage from "./pages/PerfilPage/PerfilPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignRoute from "./routes/SignRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from "./components/ScrollToTop/ScrolltoTop";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route
            path="/signup"
            element={
              <SignRoute>
                <SignUpPage />
              </SignRoute>
            }
          />

          <Route
            path="/signin"
            element={
              <SignRoute>
                <SignInPage />
              </SignRoute>

            } />

          <Route
            path="/Cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Perfil"
            element={
              <ProtectedRoute>
                <PerfilPage />
              </ProtectedRoute>
            }
          />

          <Route path="/checkout" element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          } />

          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
