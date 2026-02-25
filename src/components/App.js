import './App.css';
import POPOSList from './POPOSList/POPOSList';
import Title from './Title/Title';
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
  