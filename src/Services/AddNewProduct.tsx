import axios from "axios";

interface productDelete{
    title:string,
    price:number,
    description:string,
    categoryId:number,
    image:string[],

}

const api=axios.create({
    baseURL:"https://api.escuelajs.co/api/v1"
})

export const AddNewProduct=async(data:productDelete)=>
{
    try {
        const response=await api.post("/products/",data)

    return response
        
    } catch (error) {
     console.log("Unable to get data",error)   
    }
}