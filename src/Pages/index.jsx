import Dashboard from "@/Pages/Dashboard";
import PendingScreen from "@/Pages/PendingScreen";
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => (
  <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/p" element={<PendingScreen />} />
  </Routes>
);

export default AppRouter;