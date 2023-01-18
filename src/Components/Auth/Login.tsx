import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box, height } from "@mui/system";
import { userLogin } from "../../Services/Login";
import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";

const Login = () => {
  const inititalValue = {
    name: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    name: yup.string().required("UserName is Required"),
    password: yup.string().required("password is required").min(3).max(8),
  });

  //react query
  const { mutateAsync, isLoading, data,isError,error } = useMutation("post", userLogin,{
    onError(error:AxiosError, variables, context) {
      // toast(error.response?.data.message)
    },
  });

  const navigate = useNavigate();

  
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          // maxHeight:"100vh"
        }}
      >
        <Typography>User Name:Krishna </Typography>
         <Typography>Password:Krishna </Typography>
        <img src="/logo/logos.jpg" style={{height:"200px",width:"200px"}}/>
        <Typography align="center" sx={{ fontSize: "40px",fontFamily:"cursive",fontWeight:"bold",color:"red" }}>
          Login
        </Typography>
        <Formik
          initialValues={inititalValue}
          validationSchema={loginSchema}
          // onSubmit={mutateAsync(name,password)}
          onSubmit={(val) => {
            mutateAsync(val);
            toast("Login Successfully")
          }}
        >
          <Box>
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
                placeholder="Enter Your User Name"
                style={{ height: "60px", width: "100%", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="name" />
              </p>
              <Field
                type="password"
                name="password"
                placeholder="Enter Your Password"
                style={{ height: "60px", width: "100%", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </p>
              <Box sx={{ display: "flex" }}>
                <Button
                
                  variant="contained"
                  type="submit"
                  sx={{ display: "flex" }}
                onClick={()=>navigate("/dashboard")}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ ml: "200px" }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <ToastContainer/>
              </Box>
            </Form>
          </Box>
        </Formik>
      </Stack>
    </>
  );
};

export default Login;

