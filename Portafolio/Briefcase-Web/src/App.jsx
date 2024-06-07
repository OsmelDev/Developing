import './App.css'
import { Abaut } from "./screen/Abaut";
import { NavBar } from "./Components/NavBar";
import { Contact } from "./screen/Contact";
import { Home } from "./screen/Home";
import { Portofolio } from "./screen/Portofolio";
import { Services } from "./screen/Services";
import { Skill } from "./screen/Skill";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
      <Abaut/>
      <Skill/>
      {/* <Services/> */}
      <Portofolio/>
      <Contact/>
    </div>
  );
}

export default App;
