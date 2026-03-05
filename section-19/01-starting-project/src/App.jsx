import Products from './components/Products';
import ShoppingCartContextProvider from './components/ShoppingCartContextProvider';
import Header from './components/Header';

function App() {
  return (
    <>
      <div id="modal" />
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
