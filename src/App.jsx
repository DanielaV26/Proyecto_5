import { MainRouter } from './router/MainRouter';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <MainRouter />
      
      <Footer />
    </>
  );
};

export default App;
