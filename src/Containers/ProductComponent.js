import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)
    // const { title, id } = products[0]
    // console.log(products[0])
    const renderList = products.map((product) => {
    const { title, id, category, price, image } = product
    console.log(image)
        return (
            // <div className='ui grid '>

                <div className='four wide column ' key={id}>
                    <Link to={`/product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className="ui medium image">
                                <svg width="150" height="150">
                                    <image href={image} x="0" y="0" width="100%" height="100%"/>
                                </svg>
                            </div>
                            <div className='content'>
                                <div className="header">
                                    {title}
                                </div>
                                <div className="meta price">₹{price}</div>
                                <div className="meta">₹{category}</div>
                            </div>
                        </div>
                    </div>


                    <h1>ProductComponent</h1>
                    </Link>
                </div>
            )
    })
      return  <>{renderList}</>

}
