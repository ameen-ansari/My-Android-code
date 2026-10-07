import Dashboard from "@/Pages/Dashboard";
import PendingScreen from "@/Pages/PendingScreen";
import ExpensesScreen from "@/Pages/ExpensesScreen";
import Budget from "@/Pages/Budget";
import Profile from "@/Pages/Profile";
import SignUp from "@/Pages/SignUp";
import Login from "@/Pages/Login";
import Forgetpwd from "@/Pages/Forgetpwd";
import OTPScreen from "@/Pages/OTPScreen";
import { Route, Routes } from 'react-router-dom';
import * as R from 'react-router-dom';

const AppRouter = () => (
  <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pendingscreen" element={<PendingScreen />} />
        <Route path="/exscreen" element={<ExpensesScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="*" element={<R.Navigate to="/" replace />} />
  </Routes>
);

export default AppRouter;