import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../Services/Login";
import useStore from "../../Store/store";
import Nav from "./Nav";
import "./style.css";

interface CartItems
{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
}

const Dash = () => {
  const { data } = useQuery("post", fetchData);
  // console.log(data);
  const add = useStore((state: any) => state.add);
  //zustant logic
  const addItems = (value
    :CartItems) => {
    add({
      id: value.id,
      title: value.title,
      price: value.price,
      description: value.description,
      category: value.category,
      image: value.image,
    });
  };
  
  return (
    <>
      <Nav />
      <Grid container spacing={10}>
        {data?.data.map((value: any) => (
          <Grid item lg={3}>
            <>
              <img src={value.image} />
              <p>Title:{value.title}</p>
              <p>Price:{value.price}</p>
              <p>Description:{value.description}</p>
              <p>Rating:{value?.rating?.rate}</p>
              <Button variant="contained" onClick={()=>addItems(value)}>Add To Cart</Button>
            </>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dash;
