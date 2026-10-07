import { Route, Routes } from 'react-router-dom';
import Dashboard from "@/Pages/Dashboard";
import PendingScreen from "@/Pages/PendingScreen";
import ExpensesScreen from "@/Pages/ExpensesScreen";
import Budget from "@/Pages/Budget";
import Profile from "@/Pages/Profile";
import SignUp from "@/Pages/SignUp";
import Login from "@/Pages/Login";
import Forgetpwd from "@/Pages/Forgetpwd";
import OTPScreen from "@/Pages/OTPScreen";
import * as R from 'react-router-dom';

const GuestRouter = () => (
  <Routes>
    <Route path="*" element={<R.Navigate to="/login" replace />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetpwd" element={<Forgetpwd />} />
    <Route path="/mineotp" element={<OTPScreen />} />
  </Routes>
);

export default GuestRouter;