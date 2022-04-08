import logo from './logo.svg';
import './App.css';
const text = 'Ne nyomd meg a reaktort!'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <p>
          Veszélyes!
        </p>
        <button>Reactor</button>
        
      </header>
    </div>
  );
}



/*const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `${event.detail}`;
});*/


export default App;