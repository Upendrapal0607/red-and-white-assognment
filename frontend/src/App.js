import logo from './logo.svg';
import './App.css';
import { AllRoute } from './Routes/AllRoute';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App bg-black">
      <Navbar/>
     <AllRoute/>
     <Footer/>
    </div>
  );
}

export default App;
