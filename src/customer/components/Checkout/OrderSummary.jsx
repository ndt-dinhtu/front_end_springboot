import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const { order } = useSelector(store => store)
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const orderId = searchParams.get("order_id")

    useEffect(() => {

        dispatch(getOrderById(orderId))

    }, [orderId, dispatch])


    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AdressCard address={order.order?.shippingAddress} />
            </div>

            <div>
                <div className='lg:grid grid-cols-3 relative'>
                    <div className='col-span-2'>
                        {order.order?.orderItems.map((item) => <CartItem item={item} />)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                            <hr />
                            <div className='space-y-3 font-semibold mb-10'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>{order.order?.totalPrice}$</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Disccount</span>
                                    <span> -{order.order?.discounte}$</span>
                                </div>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Delivery Charge</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex justify-between pt-3 text-red-900 font-bold'>
                                    <span>Total Amount</span>
                                    <span>{order.order?.totalDiscountedPrice}$</span>
                                </div>

                            </div>
                            <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default OrderSummary
