
import './App.css';
import Header from './Components/Header'
import About from './Components/About';
import Installations from "./Components/Installations";
import Footer from './Components/Footer'


function App() {
  return (
    <div className="container-fluid">
    <div className="padding-purpose">
    <Header/>
     <About/>
     <Installations/>
    </div>
    
     <Footer/>
    </div>
  );
}

export default App;
