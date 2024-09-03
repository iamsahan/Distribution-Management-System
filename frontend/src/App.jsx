import { React, useState } from "react";

import "./App.css";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import CreateNewSale from "./pages/CreateNewSale.jsx";
import SalesDashboard from "./pages/SalesManagerDashboard.jsx";
import SalesUpdate from "./pages/SalesUpdate.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addSale" element={<CreateNewSale />}></Route>
        <Route path="/dash" element={<SalesDashboard />}></Route>
        <Route path="/upd/:id" element={<SalesUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
