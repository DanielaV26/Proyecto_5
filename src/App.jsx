import { MainRouter } from './router/MainRouter';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='p-48'>
      <MainRouter />
      </div>
      
      <Footer />
    </>
  );
};

export default App;
