import axios from "axios";
import { createContext, useEffect, useState } from "react";
import $ from 'jquery'
import toast from 'react-hot-toast';
// create contxet
export let CartContext = createContext(null)
// context function
export function CartContextProvider(props) {
    // main Api link
    let baseUrl = "https://route-ecommerce.onrender.com"
    // cart object
    let [cartList, setCartList] = useState()
    // call allCartData
    useEffect(()=>{
      getAllCartData()
    },[])
    // api get all cart 
    async function getAllCartData() {
        let headers = { token: localStorage.getItem("token") }
        let { data } = await axios.get(`${baseUrl}/api/v1/cart`, {headers}).catch((err)=>{
            console.log(err.response.data.statusMsg);
        })
        $(".loading").fadeOut(1500)
        console.log(data);
        setCartList(data)
    }
    async function deleteItemCard(id){
        let headers = { token: localStorage.getItem("token") }
        let {data} = await axios.delete(`${baseUrl}/api/v1/cart/${id}`, {headers})
        setCartList(data)
        toast.error("Product deleted successfully from your cart" , {className:" box-shadow" , duration: 2000})
    }
    async function updateQuantity(id ,count){
        let body = {count:count}
        let headers = { token: localStorage.getItem("token") }
        let {data} = await axios.put(`${baseUrl}/api/v1/cart/${id}`, body ,{headers})
        setCartList(data)
        toast.success("Product updated successfully" , {className:" box-shadow" , duration: 2000})
    }
    return <CartContext.Provider value={{ cartList , getAllCartData , deleteItemCard , updateQuantity}}>
        {props.children}
    </CartContext.Provider>
}