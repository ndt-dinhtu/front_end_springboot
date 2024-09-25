import { TrendingUp } from '@mui/icons-material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats: '245K',
        tittle: "Sales",
        color: "primary",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },

    {
        stats: '12.5k',
        tittle: "Custommer",
        color: "success",
        icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.54K',
        tittle: "Products",
        color: "warning",
        icon: <ImportantDevicesIcon sx={{ fontSize: "1.75rem" }} />
    },

    {
        stats: '88K',
        tittle: "Revenue",
        color: "info",
        icon: <CurrencyExchangeIcon sx={{ fontSize: "1.75rem" }} />
    }
]

const renderStats = () => {
    return salesData.map((item, index) =>
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex", alignItems: 'center'
            }}>

                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    background: `${item.color}`
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{item.tittle}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid >
    )
}


const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
            <CardHeader title="Monthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2' sx={{ margin: '11px' }}>
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 48.5% growth 😎
                        </Box>
                        {" "} this month
                    </Typography>

                }
                titleTypographyProps={{
                    xs: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '. 15px !important'
                    }
                }}
            />

            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview
