import './App.css';
import Body from './components/Body.jsx';

function App() {
  return (
    <div className="App">
      <div className='search-bar'>
        <img src='./resources/logo.png'></img>
        <p> hi </p>
      </div>
      <div className='main-view'> 
        <Body />
      </div>
    </div>
  );
}

export default App;
