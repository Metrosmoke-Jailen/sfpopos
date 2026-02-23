import logo from './logo.svg';
import './App.css';
import POPOSList from './POPOSList';
import Title from './Title';
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <img src={logo} alt="" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
  