import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import anhcup from "../../assets/cup.png"
const TrignleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute"
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute"
})
const Achivement = () => {
    return (
        <Card sx={{ position: "relative", bgcolor: "#242B2E", color: "white" }}>

            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: ".25px" }}>
                    SHOP
                </Typography>
                <Typography variant='body2'>
                    Congratulations <MoodIcon />
                </Typography>
                <Typography variant='h5' sx={{ my: 3.1 }}>
                    400k
                </Typography>
                <Button size='small' variant='contained'>View Sales</Button>

                <TrignleImg src={anhcup}></TrignleImg>

                <TrophyImg src='' />
            </CardContent>

        </Card>
    )
}

export default Achivement
