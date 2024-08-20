import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../assets/images/medvation-logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Swal from "sweetalert2";
import AlertComponent from "./AlertComponent";
import "../Styles/AlertComponent.css";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertProps, setAlertProps] = useState({ type: "", message: "" });

  const uniqueKey = Date.now(); // Generate a unique key

  let navigate = useNavigate();

  // Validation schema for the form
  const validationSchema = Yup.object({
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Initial form values
  const initialValues = {
    userName: "",
    email: "",
    role: "",
    password: "",
    // confirmPassword: "",
  };

  // Handle form submission
  const handleSubmit = (values) => {
    setIsLoading(true);
    // console.log("Form data", values);
    // You can perform API calls or any other actions here
    axios
      // .post("http://localhost:4500/medvation/register", values)
      .post("https://medvation-backend.vercel.app/medvation/register", values)
      .then((response) => {
        setIsLoading(false);

        // console.log(response);
        if (response.data.message === "Registration Successful") {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Registration Successful",
            confirmButtonColor: "#0A2877",
          });

          navigate("/login");
        } else if (
          response.data === "User with this email and role already exists"
        ) {
          setAlertProps({
            type: "danger",
            message: "Email already exist!",
            uniqueKey, // Pass uniqueKey but not display it
          });
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
          <p className="text-center">Create your Account</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="form-group mb-3">
                  <Field
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="text-danger"
                  />
                </div>
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
                  <Field as="select" name="role" className="form-control">
                    <option value="">Choose your role</option>
                    <option value="Student">Student</option>
                    <option value="Medical Specialist">
                      Medical Specialist
                    </option>
                  </Field>
                  <ErrorMessage
                    name="role"
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
                <div className="form-group mb-3">
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  className={`${
                    !values.userName ||
                    !values.email ||
                    !values.role ||
                    !values.password
                      ? "btnStyle"
                      : ""
                  } SignUp-button btn w-100`}
                  disabled={
                    !values.userName ||
                    !values.email ||
                    !values.role ||
                    !values.password
                  }
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div className="text-center mt-3">
            <span>Or</span>
          </div>

          <div className="text-center d-flex mt-3 mx-auto gap-2">
            <p>Already have an account? </p>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
