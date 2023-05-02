import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Stack, Button, Typography, Box, MenuItem, TextField, Grid} from '@mui/material'
import { useState } from 'react';
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [errors,setErrors]= useState({
        firstName: "",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            firstName
        }).then(res=> navigate('/home')).catch(err => console.log(err));
    };
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
            <Typography color='red' fontWeight='600' fontSize='25px'>
                Ironshell | Fitness Club
            </Typography>
            <Box>
                <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10px' }}>
                    <Box sx={{ backgroundColor: 'black' }}>
                        <h1>Get a Free Consultation</h1>
                        <Stack sx={{ width: "90%" }}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column" spacing={2}>
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="First Name"
                                                variant="outlined"
                                                value={firstName}
                                                required
                                                onChange={(e) => setFirstName(e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </div>
            </Box>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
        </Box>
    )
}

export default SignUp