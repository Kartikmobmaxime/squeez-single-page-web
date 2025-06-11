import './App.css';
import './style.css';
import BusinessList from './components/BusinessList';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Loader from './components/common/Loader';

function App() {
  return (
    <div className="min-vh-100">
      <Header />
        <div>
          <Loader />
        </div>
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
