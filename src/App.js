import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [id, setId] = useState();
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList setId={setId} />} />
          <Route path="/detail" element={<ProductDetail id={id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
