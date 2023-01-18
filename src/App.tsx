import React from "react";
import Login from "./Components/Auth/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dash from "./Components/Dashbard/Dash";
import Register from "./Components/Auth/Register";
import {

  QueryClient,
  QueryClientProvider,
} from "react-query";
import Nav from "./Components/Dashbard/Nav";
import AddProduct from "./Components/Feature/AddProduct";
import GetJewelary from "./Components/Feature/GetJewelary";
import PaymentGate from "./Components/Feature/PaymentGate";
import Cartpage from "./Components/Feature/Cartpage";
import NewClothes from "./Components/Feature/NewClothes";
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/dashboard" element={<Dash/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/nav" element={<Nav/>}/>
          <Route path="/newproduct" element={<AddProduct/>}/>
          <Route path="/jewelary" element={<GetJewelary/>}/>
          <Route path="/payment" element={<PaymentGate/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
          <Route path="/newclothes" element={<NewClothes/>}/>
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
