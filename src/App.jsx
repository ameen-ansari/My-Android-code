import React, { useState } from 'react';
import Navbar from ".././Utils/Components/Navbar.jsx";
import PendingDetailSheet from ".././Utils/Components/PendingDetailSheet";
import AddTransactionModal from ".././Utils/Components/AddTransactionModal";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "@/Pages/Dashboard";
import Pendings from "@/Pages/PendingScreen";
const App = () => {
  const [ AddModal, setHandleAdd ] = useState(false);
  return (
    <div className="hero">
      <Navbar handleAdd={setHandleAdd} />
      <AddTransactionModal
        open={AddModal}
        onClose={() => setHandleAdd(false)}
      />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/p" element={<Pendings />} />
      </Routes>
    </div>
  );
};
export default App;
