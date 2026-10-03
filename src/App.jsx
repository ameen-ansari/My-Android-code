import React, { useState } from 'react';

import Navbar from ".././Utils/Components/Navbar.jsx"
import AddTransactionModal from ".././Utils/Components/AddTransactionModal"
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard"
const App = () =>{ 
    const [AddModal, setHandleAdd] = useState(false);
  return(
  <div className="hero">
    Hi my termux ap
   <Navbar
     handleAdd={setHandleAdd}
     />
   <AddTransactionModal
     open={AddModal}
     onClose={() => setHandleAdd(false)}
     />
    <Routes>
  <Route path="/" element={   <Dashboard />} />
  </Routes>
  </div>
)}
export default App
