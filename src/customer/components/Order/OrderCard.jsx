import { Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OrderCard = () => {
    return (
        <div className='p-10 shadow-md shadow-black hover:shadow-2xl'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>

                        < img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />

                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>

                    </div >

                </Grid >
                <Grid item xs={2}>
                    <p>1099$</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            < FiberManualRecordIcon
                                sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered On March 03
                            </span>
                        </p>

                        <p className='text-xs'>
                            Your Item Has Been Delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}

                </Grid>

            </Grid >


        </div >
    )
}

export default OrderCard
