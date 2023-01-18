import { Button, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getjewelery } from "../../Services/Login";
import useStore from "../../Store/store";
import Nav from "../Dashbard/Nav";
const GetJewelary = () => {
  const { data } = useQuery("getData", getjewelery);
  
  interface CartItems
{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
}
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
          <>
            <Grid item lg={4}>
                <img src={value.image} />
              <p>{value.title}</p>
              <p>{value.price}</p>
              <p>{value.category}</p>
              <Button variant="contained" onClick={()=>addItems(value)}>Add To Cart</Button>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default GetJewelary;
