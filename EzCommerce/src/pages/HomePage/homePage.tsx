import HeaderComponent from '../../components/HeaderComponent/Header';
import FooterComponent from '../../components/FooterComponent/Footer';
import '../../App.css';

export default function HomePage() {
  return (
    <>
      <div className="full-page-layout">
        <HeaderComponent />
        <div className="full-page-content">
          <h1>Página Inicial</h1>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
