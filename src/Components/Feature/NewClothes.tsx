import { Button, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import  useStore  from "../../Store/store";
import { newClothes } from "../../Services/Login";
import Nav from "../Dashbard/Nav";
const NewClothes = () => {
  const { data, error, isError } = useQuery("post", newClothes);
  console.log(data)
  console.log(data);

  //new 
  interface clothes
  {
    id:number,
    images:string,
    price:number,
    description:string
  }
  const addNewClothes=useStore((state:any)=>state.add)
  const addItems = (value
    :clothes) => {
        addNewClothes({
      Title: value.id,
      images: value.images,
      price: value.price,
      description: value.description,
     
    });
  };
  return(
    <>
    <Nav/>
   <Grid container spacing={10}>
        {data?.data.map((value: clothes) => (
          <Grid item lg={3}>
            <>
            <p>Title:{value.id}</p>
              <img src={value.images} />
              
              <p>Price:{value.price}</p>
              <p>Description:{value.description}</p>
              <Button variant="contained" onClick={()=>addItems(value)}>Add To Cart</Button>
             
             
            </>
          </Grid>
        ))}
      </Grid>
    </>
  )
};

export default NewClothes;
