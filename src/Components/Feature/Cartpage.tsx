import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStore from "../../Store/store";
import Nav from "../Dashbard/Nav";

interface CartItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string;
}
  //new 
  interface clothes
  {
    id:number,
    image:string,
    price:number,
    description:string
  }

const Cartpage = () => {
  const cartProduct = useStore((state: any) => state.product);
  const cartdelete = useStore((state: any) => state.delete);

  const total = cartProduct.reduce(
    (total: number, item: CartItems) => total + item.price,
    0
  );
  return (
    <>
      <Nav/>
        <Box >
          <Grid container spacing={5}>
            {cartProduct.map((value: CartItems) => (
              <Grid item lg={4}>
                <img src={value.image} />
                
                <p>Price:{value.price}</p>
                <p>Description:{value.description}</p>
                <Button
                  onClick={() => cartdelete(value.id)}
                  variant="contained"
                  sx={{ mr: "20px" }}
                >
                  Remove From Cart
                </Button>

                {/* <p>Rating:{value.rating.rate}</p> */}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography   
            variant="h3"
            display="flex"
            justifyContent="flex-end"
            fontWeight="bold"
            color="red"
            mt="30px"
    
          >
            Total Product:${total}
          </Typography>
      
    </>
  );
};

export default Cartpage;
