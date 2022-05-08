import './App.css';
import Items from './components/Items';
import Cart from './components/Cart';
import Header from './components/Header';
import objetoComputado from './search'

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <Items data={objetoComputado.results} />
        <Cart />
      </section>
    </>
  );
}

export default App;
