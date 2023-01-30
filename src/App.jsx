import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import Main from "./components/Main/Main";
import Connect from "./components/Connect/Connect";
import Success from "./components/Success/Success";
import { useState } from "react";
import Merge from "./components/Merge/Merge";

function App() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/connect"
          element={<Connect closed={closed} setClosed={setClosed} />}
        />
        <Route path="/success" element={<Success setClosed={setClosed} />} />
        <Route path="/merge" element={<Merge/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
