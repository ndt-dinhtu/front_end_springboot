import React from 'react'

import anh1 from "../../../assets/product_1.jpg"

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={anh1}
                        alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                    <p className='opacity-70'>Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
                </div>
            </div>
        </div>

    )
}

export default CartItem
