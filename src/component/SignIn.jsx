import React, { useState } from "react";
import logo from "../assets/images/medvation-logo.png";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import AlertComponent from "./AlertComponent";
import axios from "axios";
import Swal from "sweetalert2";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertProps, setAlertProps] = useState({ type: "", message: "" });
  const uniqueKey = Date.now(); // Generate a unique key

  let navigate = useNavigate();

  // Validation schema for the form
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values) => {
    setIsLoading(true);
    // console.log("Form data", values);
    // You can perform API calls or any other actions here
    axios
      // .post("http://localhost:4500/medvation/login", values)
      .post("https://medvation-backend.vercel.app/medvation/login", values)
      .then((response) => {
        setIsLoading(false);

        // console.log(response);
        if (response.data === "Invalid email") {
          setAlertProps({
            type: "warning",
            message: "Invalid email! ",
            uniqueKey, // Pass uniqueKey but not display it
          });
        } else if (response.data === "Invalid password") {
          setAlertProps({
            type: "warning",
            message: "Password is Incorrect! ",
            uniqueKey, // Pass uniqueKey but not display it
          });
        } else if (response.data.message === "Login successfully") {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Login Successful",
            confirmButtonColor: "#0A2877",
          });

          // navigate("/dashboa");
        } else {
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            text: "Bad network or no internet connection.",
            confirmButtonColor: "red",
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          text: "Bad network or no internet connection.",
          confirmButtonColor: "red",
        });
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <AlertComponent
        type={alertProps.type}
        message={alertProps.message}
        uniqueKey={alertProps.uniqueKey}
      />
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div
          className="card p-4 shadow-lg text-center"
          style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }}
        >
          <img src={logo} alt="Logo" className="signUp-logo mx-auto mb-3" />
          <p className="text-center">Enter your credential to login</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form>
                {/* <div className="form-group mb-3">
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div> */}
                <div className="form-group mb-3">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <button
                  type="submit"
                  className={`${
                    !values.email || !values.password ? "btnStyle" : ""
                  } SignUp-button btn w-100`}
                  disabled={!values.email || !values.password}
                >
                  Sign up
                </button>
              </Form>
            )}
          </Formik>

          {/* <button className="btn btn-outline-primary w-100 mt-2">Sign In with Google</button> */}

          <div className="text-center  d-flex mt-3 mx-auto gap-2">
            <p>Don't have an account? </p>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
