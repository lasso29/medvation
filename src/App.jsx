import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Loader from "./component/Loader";
import MedicalDashboard from "./pages/MedicalDashboard";
import StudentDashboard from "./pages/StudentDashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/MedicalDashboard" element={<MedicalDashboard />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        {/* <Route path='/loader' element={<Loader/>} /> */}
      </Routes>
    </>
  );
}

export default App;
