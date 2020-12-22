import logo from './logo.svg';
import './App.css';

function App() {
  const generate = () => {
    window.open(`https://limitless-falls-32245.herokuapp.com/generate-csv/all/all/all/waiting_approve`, '_blank')
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => generate()}>
          <h1>generate csv</h1>
        </button>
      </header>
    </div>
  );
}

export default App;
