import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddNewProduct } from "../../Services/AddNewProduct";


const AddProduct = () => {
  const inititalValue = {
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [],
  };
const navigate=useNavigate()
  const { mutateAsync, error, isError, data } = useMutation(
    "post",
    AddNewProduct
  );

  const loginSchema = yup.object().shape({
    title: yup.string().required("title is Required"),
    price: yup.string().required("price  is required"),
    description: yup.string().required("description is required"),
    categoryId: yup.string().required("categoryId is required"),
    images: yup.string().required("images is required"),
  });
  return (
    <>
    <img src="/logo/logos.jpg" style={{height:"200px",width:"200px"}}/>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        
        <Typography
          variant="h5"
          color="red"
          sx={{ boxShadow: "5px 5px 10px  #888888" }}
        >
          ADD NEW PRODUCT
        </Typography>
        <Box sx={{ mt: "40px" }}>
          <Formik
            initialValues={inititalValue}
            validationSchema={loginSchema}
            onSubmit={(val: any) => {
              val.images = [val.images];
              mutateAsync(val);
              toast("Add Product")
            }}
          >
            <Form>
              <Typography>Product title</Typography>
              <Field
                type="text"
                name="title"
                placeholder="Enter Product Title"
                style={{ height: "40px", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="title" />
              </p>
              <Typography>Product Price</Typography>
              <Field
                type="text"
                name="price"
                placeholder="Enter Product Price"
                style={{ height: "40px", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="price" />
              </p>
              <Typography>Product Description</Typography>
              <Field
                type="text"
                name="description"
                placeholder="Enter Product description"
                style={{ height: "40px", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="description" />
              </p>
              <Typography>Product CategoryId</Typography>
              <Field
                type="text"
                name="categoryId"
                placeholder="Enter Product CategoryId"
                style={{ height: "40px", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="categoryId" />
              </p>
              <Typography>Product Image</Typography>
              <Field
                type="text"
                name="images"
                placeholder="Enter Product image"
                style={{ height: "40px", fontSize: "20px" }}
              />
              <br />
              <p style={{ color: "red" }}>
                <ErrorMessage name="image" />
              </p>
              <Button variant="contained" fullWidth type="submit">
                Add
              </Button>
              <ToastContainer />
            </Form>
          </Formik>
        </Box>
      </Stack>
    </>
  );
};
("");
export default AddProduct;
