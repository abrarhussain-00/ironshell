import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Stack, Button, Typography, Box, MenuItem, TextField, Grid} from '@mui/material'
import { useState } from 'react';
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors,setErrors]= useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword: "",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }).then(res=> navigate('/home')).catch(err => console.log(err));
    };
    return (
        <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
            <Typography color='white' fontWeight='600' fontSize='50px'>
                Ironshell | Fitness Club
            </Typography>
            <Box style={{ marginTop: '5%'}}>
                <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10px' }}>
                    <Box sx={{ backgroundColor: 'white' , width: '90vh' }}>
                        <Stack sx={{ width: "50%" }}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column" spacing={2} style={{marginTop: '50px', marginLeft:'100px', marginBottom:'50px' }}>
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
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Last Name"
                                                variant="outlined"
                                                value={lastName}
                                                required
                                                onChange={(e) => setLastName(e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
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
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Confirm Password"
                                                variant="outlined"
                                                value={confirmPassword}
                                                required
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Button 
                                            type="submit" 
                                            variant="contained" 
                                            color="primary"
                                            size="small">
                                                Sign Up
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

export default SignUp