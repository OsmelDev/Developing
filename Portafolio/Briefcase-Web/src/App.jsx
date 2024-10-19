import "./App.css";
import { Abaut } from "./screen/Abaut";
import { NavBar } from "./Components/NavBar";
import { Contact } from "./screen/Contact";
import { Home } from "./screen/Home";
import { Portofolio } from "./screen/Portofolio";
import { Skill } from "./screen/Skill";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Abaut />
      <Skill />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
