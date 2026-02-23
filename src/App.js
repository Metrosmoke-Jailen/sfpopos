import logo from './logo.svg';
import './App.css';
import POPOSList from './POPOSList';
import Title from './Title';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <img src={logo} />
      <Footer />
    </div>
  );
}

export default App;
