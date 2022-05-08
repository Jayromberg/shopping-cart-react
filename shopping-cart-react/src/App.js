import './App.css';
import Items from './Items';
import Cart from './Cart';
import Header from './Header';
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
