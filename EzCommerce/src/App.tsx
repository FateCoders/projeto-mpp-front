import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/homePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}