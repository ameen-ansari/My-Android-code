import React, { useEffect, useState } from 'react';
import Navbar from "@/Utils/Components/Navbar.jsx";
import AddTransactionModal from "@/Utils/Components/AddTransactionModal";
import AppRouter from "@/Pages/AppRouter";
import GuestRouter from "@/Pages/GuestRouter";
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state?.profile?.token);
  const navigate = useNavigate()
  const [ AddModal, setHandleAdd ] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [ token ]);

  return (
    <div className="hero">
      {token ? (
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