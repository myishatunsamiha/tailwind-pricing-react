import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
      <h1 className="text-3xl">Welcome to Price Calculator</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
