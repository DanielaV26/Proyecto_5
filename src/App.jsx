import { MainRouter } from './router/MainRouter';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className='md:p-24'>
      <MainRouter />
      </div>
      
      <Footer />
    </>
  );
};

export default App;
