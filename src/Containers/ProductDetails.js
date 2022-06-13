import React,{useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts,removeselectedProducts } from '../Component/Action/productaction'
export default function ProductDetails() {
  const product = useSelector((state)=>state.product);

  const {image,title,price,category,description} = product;
  console.log(image)
  console.log(product)
const {productId}=useParams();
const dispatch = useDispatch();
const getoneProductdetails=async(id)=>{
  await axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
    console.log(res.data)
    dispatch(selectedProducts(res.data));
  })
}
useEffect(()=>{
if(productId && productId!=='')getoneProductdetails(productId);
return()=>{
  dispatch(removeselectedProducts());
}
},[productId])

console.log(product)
  return (
    <div className='ui grid container'>
      {Object.keys(product).length===0?(
        <div>.....loading</div>
      ):(
      <div className='ui placeholder segment'>
        <div className='ui two column stackable center aligned grid'>
          <div className='ui vertical divider'>And</div>
          <div className='middle alligned row'>
            <div className='column lp'>
              <img className="ui fluid image" src={image} />
            </div>
            <div className='column rp'>
              <h1>{title}</h1>
              <h2>
                <a className='ui teal tag label'>${price}</a>
              </h2>
              <h3 className='ui brown block header'>{category}</h3>
              <p>{description}</p>
              <div className='ui vertical animated button ' tabIndex="0">
            <div className='hidden content'>
              <i className='shop icon'></i>

            </div>
              </div>
            </div>
              

            
          </div>
        </div>
      </div>
      )}
        </div>
  )
}
