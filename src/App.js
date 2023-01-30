import './App.css';
import Home from './Page/Home'
import Single from "./Page/Single"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

  
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/single/:city" element={<Single />} />
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
