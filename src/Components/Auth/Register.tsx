import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const inititalValue = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const sigInSchema = yup.object().shape({
    name: yup.string().required("UserName is Required"),
    password: yup.string().required("password is required").min(3).max(8),
    confirmPassword: yup
      .string()
      .required("password is required")
      .min(3)
      .max(8),
    email: yup.string().required("Email is Required"),
  });
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <>
    <Stack>
    <img src="/logo/logos.jpg" style={{height:"200px",width:"200px"}}/>
    </Stack>
    <Stack
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"70vh",
        
      }}
    >
      
      <Typography align="center" sx={{ fontSize: "40px" }}>
        Register Page
      </Typography>
      <Formik
        initialValues={inititalValue}
        validationSchema={sigInSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "40px",
          }}
        >
          <Field
            type="text"
            name="name"
            placeholder="Enter Your Name"
            style={{ height: "60px", width: "100%",fontSize:"20px" }}
          />
          <br />
          <p style={{ color: "red" }}>
            <ErrorMessage name="name" />
          </p>
          <Field
            type="password"
            name="password"
            placeholder="Enter Your Password"
            style={{ height: "60px", width: "100%" ,fontSize:"20px"}}
          />
          <br />
          <p style={{ color: "red" }}>
            <ErrorMessage name="password" />
          </p>
          <Field
            type="text"
            name="confirmPassword"
            placeholder="Enter Your ConfirmPassword"
            style={{ height: "60px", width: "100%",fontSize:"20px" }}
          />
          <br />
          <p style={{ color: "red" }}>
            <ErrorMessage name="confirmPassword" />
          </p>
          <Field
            type="text"
            name="email"
            placeholder="Enter Your Email"
            style={{ height: "60px", width: "100%" ,fontSize:"20px"}}
          />
          <br />
          <p style={{ color: "red" }}>
            <ErrorMessage name="email" />
          </p>

          <Button variant="contained" type="submit"   >
            Register
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={() => navigate("/")}
            sx={{ml:"200px",position:"relative",bottom:"35px"}}
          >
            Login
          </Button>
        </Form>
      </Formik>
    </Stack>
    </>
  );
};

export default Register;
