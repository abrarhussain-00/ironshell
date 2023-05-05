import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Stack, Button, Typography, Box, MenuItem, TextField, Grid} from '@mui/material'
import { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors,setErrors]= useState({
        email:"",
        password:"",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            email,
            password,
        }).then(res=> navigate('/home')).catch(err => console.log(err));
    };
    return (
        <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
            <Typography color='red' fontWeight='600' fontSize='25px'>
                Ironshell | Fitness Club
            </Typography>
            <Typography color='white' fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
                Keep track of <br /> <span style={{color:'red'}}>YOUR </span>workout
            </Typography>
            <Box style={{ marginTop: '3%'}}>
                <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10px' }}>
                    <Box sx={{ backgroundColor: 'white' , width: '90vh' }}>
                        <Stack sx={{ width: "50%" }}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column" spacing={2} style={{marginTop: '50px', marginLeft:'100px', marginBottom:'50px' }}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                value={email}
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Password"
                                                variant="outlined"
                                                value={password}
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Button 
                                            type="submit" 
                                            variant="contained" 
                                            color="primary"
                                            size="small">
                                                Login
                                        </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </div>
            </Box>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default Login