import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from "axios"
import ProductComponent from './ProductComponent'
import {setProducts}  from '../Component/Action/productaction'
export default function ProductListing() {
    const products=useSelector(state=>state)
    const dispatch=useDispatch()
    const fetchProduct=async()=>{
          const response=await axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)
          const dd= dispatch(setProducts(res.data))
           console.log(dd)
          }).catch((err)=>{
              console.log(err)  
          })
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    console.log(products)
  return (
    <div className='ui grid container'>
        <h1 className="ui grid container">ProductListing</h1>
        
        <ProductComponent />
    </div>
  )
}
