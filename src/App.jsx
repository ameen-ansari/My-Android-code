import React, { useState } from 'react';
import Navbar from "@/Utils/Components/Navbar.jsx";
import PendingDetailSheet from "@/Utils/Components/PendingDetailSheet";
import AddTransactionModal from "@/Utils/Components/AddTransactionModal";
import { Router } from 'react-router-dom';
import Dashboard from "@/Pages/Dashboard";
import AppRouter from "@/Pages/index";
const App = () => {
  const [ AddModal, setHandleAdd ] = useState(false);
  return (
    <div className="hero">
      <Navbar handleAdd={setHandleAdd} />
      <AddTransactionModal
        open={AddModal}
        onClose={() => setHandleAdd(false)}
      />
      <AppRouter />
    </div>
  );
};
export default App;
