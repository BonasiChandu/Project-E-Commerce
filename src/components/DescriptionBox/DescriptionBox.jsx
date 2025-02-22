import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online store where buyers can purchase
               products and services from a seller. It allows businesses to sell 
               their products and services online, rather than in a physical store. 
            </p>
            <p> E-commerce refers to commercial activities including the electronic
                buying or selling products and services which are conducted on online
                platforms or over the Internet.               
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox
