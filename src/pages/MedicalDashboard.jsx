import React, { useEffect, useState } from "react";
import Loader from "../component/Loader";
import { useNavigate } from "react-router-dom";

const MedicalDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [medicalData, setMedicalData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const getData = JSON.parse(localStorage.getItem("data"));
    // console.log(getData);
    if (getData) {
      setMedicalData(getData);
      setIsLoading(false);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="container mt-5">
        Welcome to Medical Dashboard, <b>{medicalData.userName}</b>
      </div>
    </>
  );
};

export default MedicalDashboard;
