import './TopPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import gdgslogo from '../images/TopPage/gdgslogo.svg';
const TopPage = () => {
  return (
  <>
    <Header />
    <div className="top-page">
     
        <img src={gdgslogo} alt="TopPageImage" />
      
      <h1>トップページです</h1>
    </div>
    <Footer />
  </>
  );
};

export default TopPage;