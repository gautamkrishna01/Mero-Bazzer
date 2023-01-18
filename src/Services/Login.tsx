import axios from "axios"


const api=axios.create({
    baseURL:"https://fakestoreapi.com"
})

export const userLogin=async(data: {name:string,password:string})=>
{
    try {
        const response=await api.post("/auth/login",data)
        return response
    } catch (error) {
        console.log("Unable to get data")
    }
}


//get data
export const fetchData=async()=>
{
   try {
    const data=await api.get("https://fakestoreapi.com/products")
    return data
   } catch (error) {
    console.log("Unable to fetch data",error)
   }
}
// Get products in a specific category

export const getjewelery=async()=>
{
    try {
        const data=await api.get("/products/category/jewelery")
        return data
    } catch (error) {
        console.log("Unable to get data",error)
    }
}

//get product
export const newClothes=async()=>
{
    try {
        const data=await axios.get("https://api.escuelajs.co/api/v1/products")
        return data
        
    } catch (error) {
        console.log("unable of get data",error)
    }
}