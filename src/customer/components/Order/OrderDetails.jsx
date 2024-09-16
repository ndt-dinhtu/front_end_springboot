import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Grid } from '@mui/material'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Dilivery Address</h1>
                <AdressCard />
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div>
            <Grid className='space-x-5' container>

                <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={{ alignItems: "center", justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div>

                            <img className='w-[5rem] h-[5rem] object-cover object-top mx-5'
                                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                                alt="" />

                            <div className='space-y-2 ml-5'>

                                <p>Men Slim Mid Rise Black Jeans</p>

                                <p className='space-x-5'>
                                    <span>Color: pink</span>
                                    <span>Size: M</span>
                                </p>

                                <p>Seller: linaria</p>

                                <p>1099$</p>

                            </div>

                        </div>


                    </Grid>
                </Grid>
            </Grid>


        </div>

    )
}

export default OrderDetails
