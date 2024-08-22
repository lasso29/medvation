import React, { useEffect, useState } from "react";
import Loader from "../component/Loader";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const getData = JSON.parse(localStorage.getItem("data"));
    // console.log(getData);
    if (getData) {
      setStudentData(getData);
      setIsLoading(false);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="container mt-5">
        Welcome to Student Dashboard, <b>{studentData.userName}</b>
      </div>
    </>
  );
};

export default StudentDashboard;
