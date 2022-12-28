import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./App.scss";
import Main from "./components/Main/Main";

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
    <Footer/>
  </div>;
}

export default App;
