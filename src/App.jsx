import { MainRouter } from './router/MainRouter';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { CartModal } from './components/CartModal';
import { useContext } from 'react';
import { CartContext } from './context/cart/cartContext';

const App = () => {
  const [state, dispatch] = useContext(CartContext)
  console.log(state)
  return (
    <>
    <div className='text-montserrat'>
      <Header/>
      <Navbar/>
      <div className='md:px-24'>
      <MainRouter />
      </div>
      {
        state.openCart ? <CartModal/> : <></>
      }
      
      <Footer />
      </div>
    </>
  );
};

export default App;
