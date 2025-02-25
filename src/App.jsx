import './App.css';
import logo from './assets/logo.svg'; // Ensure logo path is correct

function App() {
  return (
    <>
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <h1 className="headline">
        Coming Soon: Game-Changing Mobile App
      </h1>
      <p className="description">
        Spremite se za mobilnu aplikaciju koja menja sve!
      </p>
    </>
  );
}

export default App;
