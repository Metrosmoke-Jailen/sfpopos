import logo from './logo.svg';
import './App.css';
import POPOSList from './POPOSList';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <img src={logo} />
    </div>
  );
}

export default App;
