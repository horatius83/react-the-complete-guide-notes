import Logo from './assets/logo.jpg'
import Products from './components/Products'

function App() {
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={Logo} alt="Logo" />
          <h1>Foody's Food Trough</h1>
        </div>
        <button>View Cart</button>
      </div>
      <main>
        <Products></Products>
      </main>
    </>
  );
}

export default App;
