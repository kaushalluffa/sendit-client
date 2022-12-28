import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./App.scss";
import Main from "./components/Main/Main";
import Connect from "./components/Connect/Connect";

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/connect" element={<Connect/>}/>
    </Routes>
    <Footer/>
  </div>;
}

export default App;
