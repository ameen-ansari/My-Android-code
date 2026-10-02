import Navbar from ".././Utils/Components/Navbar.jsx"
import StyledBtn from ".././Utils/Components/StyledBtn.jsx"
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard"
const App = () => (
  <>
  <div className="hero">
    Hi my termux ap
   <Navbar />
   <StyledBtn />
  </div>
        <Routes>
  <Route path="/" element={   <Dashboard />} />
       <Route path="/a" element={   <Navbar />} />
       <Route path="/b" element={   <Navbar />} />
  </Routes>
  </>
)
export default App
