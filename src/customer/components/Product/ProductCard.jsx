import React from 'react';
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem] overflow-hidden'>
                <img className='h-full w-full object-cover'
                    alt="ao thun nu" src={product.imageUrl} />
            </div>
            <div className='textPart bg-white p-3'>
                <div className='mb-2'>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
