import './App.css';
import './style.css';
import BusinessList from './components/BusinessList';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-vh-100">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
