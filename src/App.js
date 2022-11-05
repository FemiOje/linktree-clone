import React from "react";
import Homepage from "./routes/Homepage";
import NoMatch from "./routes/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
        <Router>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/contact' element={Contact} />
              <Route path='*' element={<NoMatch />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;