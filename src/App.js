
import SimpleForm from './components/SimpleForm'
import Typewriter from 'typewriter-effect';
import Header from './components/Header';
import Screen from './components/Screen';
import Footer from './components/Footer';
import CarouselTranslators from './components/CarouselTranslators';
import Tooltip from "react-simple-tooltip"

function App() {
  return (
    <div className="App">
  <main className="py-3">
  <Header/>
  <CarouselTranslators/>
  
  <SimpleForm/>

  <Screen/>
  </main>
  <Footer/>
    </div>
  );
}

export default App;
