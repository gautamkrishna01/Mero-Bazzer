import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "../Dashbard/style.css"


//using zustand
import useStore from "../../Store/store";

const Nav = () => {
  const navigate = useNavigate();
  const cartProduct = useStore((state: any) => state.product);

  //filter working
  const [filter, setFilter] = useState("");
  console.log(filter);
  return (
    <>
      <Stack
        sx={{
          height: "20vh",
          width: "100%",
          background: "#0000FF",
          color: "white",
          margin: "auto",
          
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40vh",
            fontSize: "20px",
          }}
        >
          <Box sx={{ display: "flex", width: "40%" }}>
            <Typography
              sx={{
                fontSize: "30px",
                mr: "50px",
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "black",

              }}
            >
              <img src="/logo/logos.jpg" className="logo"/>
            </Typography>
            <input
              type="text"
              placeholder="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                // marginLeft: "100px",
                width: "100%",
                borderRadius: "40px",
                position: "relative",
                height: "40px",
                fontSize:"20px",
                textAlign:"center"

                // background:"black"
              }}
            />
            <AiOutlineSearch
              style={{
                position: "relative",
                right: "40px",
                top: "10px",
                color: "black",
              }}
            />
          </Box>

          <Button variant="contained" onClick={() => navigate("/register")}>
            Your Account
          </Button>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center" }}>
          <Button
            variant="contained"
           
            onClick={() => navigate("/cart")}
          >
            Cart
          </Button>
          <AiOutlineShoppingCart  style={{marginRight:"10px"}}/>
            <Typography sx={{fontSize:"20px",mr:"100px"}}>{cartProduct.length}</Typography>
          
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ mr: "20px" }} onClick={()=>navigate("/dashboard")}>
            All Product
          </Button>
          <Button variant="contained" sx={{ mr: "20px" }} onClick={()=>navigate("/newclothes")}>
            New Product
          </Button>
          <Button variant="contained" sx={{ mr: "20px" }}>
            Clothes
          </Button>
          <Button variant="contained" sx={{ mr: "20px" }}>
            Electronic
          </Button>
          <Button
            variant="contained"
            sx={{ mr: "20px" }}
            onClick={() => navigate("/jewelary")}
          >
            Jewellery{" "}
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" onClick={() => navigate("/newproduct")}>
            Add New Product{" "}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Nav;
