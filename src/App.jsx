import React, { useState } from 'react';
import Navbar from "@/Utils/Components/Navbar.jsx";
import AddTransactionModal from "@/Utils/Components/AddTransactionModal";
import AppRouter from "@/Pages/AppRouter";
import GuestRouter from "@/Pages/GuestRouter";
import "./index.css";
const App = () => {
  const [AddModal, setHandleAdd] = useState(false);
  
  // HARDCODED - change to true / false for testing
  const usr = false; // <--- set false = guest, true = logged in
  const userData = { name: "Ahmad", email: "ahmad@test.com" };

  // Make it global so all pages can accesstr
  window.currentUser = userData;
  window.isLoggedIn = usr;

  return (
    <div className="hero">
      {usr ? (
        <div>
          <Navbar handleAdd={setHandleAdd} />
          <AddTransactionModal
            open={AddModal}
            onClose={() => setHandleAdd(false)}
          />
          <AppRouter />
        </div>
      ) : (
        <GuestRouter />
      )}
    </div>
  );
};

export default App;