import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import NavBar from "./components/admin/NavBar";
import LandingPage from "./components/visitor/pagevisitor";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageVisitor />} />
        <Route path="/admin" element={<NavBar submitted={submitted} setSubmitted={setSubmitted} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;