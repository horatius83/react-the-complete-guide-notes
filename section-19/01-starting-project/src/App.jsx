import Logo from './assets/logo.jpg';
import Products from './components/Products';
import ShoppingCartContextProvider from './components/ShoppingCartContextProvider';
import Header from './components/Header';

function App() {
  return (
    <>
      <ShoppingCartContextProvider>
        <Header></Header>
        <main>
          <Products></Products>
        </main>
      </ShoppingCartContextProvider>
    </>
  );
}

export default App;
