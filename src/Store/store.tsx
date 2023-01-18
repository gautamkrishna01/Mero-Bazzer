import create, { createStore } from "zustand"
import {devtools} from "zustand/middleware"

interface ProductType
{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
}

const useStore= create(devtools((set)=>({
    product:[],
    add:(items:ProductType)=>set((state:any)=>({
        product:[...state.product,items]
    })),
    delete:(id:number)=>set((state:any)=>({
              product:state.product.filter((c:any)=>c.id!==id)
    }))
})))
export default useStore