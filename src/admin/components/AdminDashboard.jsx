import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrderView from '../view/OrdeViews'
import ProductView from '../view/ProductView'

const AdminDashboard = () => {
    return (
        <div className='p-10'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Achivement />

                </Grid>
                <Grid item xs={12} md={8}>
                    <MonthlyOverview />
                </Grid>
                <Grid className='shadow-lg' item xs={12} md={6}>
                    <OrderView />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProductView />
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminDashboard
