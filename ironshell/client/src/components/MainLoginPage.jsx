import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { useNavigate, Link, useParams } from 'react-router-dom'


const MainLoginPage = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
            <Typography color='red' fontWeight='600' fontSize='25px'>
                Ironshell | Fitness Club
            </Typography>
            <Typography color='white' fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
                Keep track of <br /> <span style={{color:'red'}}>YOUR </span>workout
            </Typography>
        <Box>
            <div style={{ marginLeft: '5%', marginRight: '5%',  marginTop: '10px' }}>
                <Link to='/signup'><Button variant='contained' style={{marginRight:'10px'}}>Ready to invest in yourself?</Button></Link>
                <Link to='/login'><Button variant='contained'>Already a member?</Button></Link>
            </div>
        </Box>

            <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default MainLoginPage