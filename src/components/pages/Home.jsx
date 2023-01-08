import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { connect, useSelector } from "react-redux";

import React, { useEffect } from 'react';
import Header from '../ui/Header';
import { getBookingByuser } from '../../redux/action/userActions';

const Home = (props)=>{
    const user = useSelector((state) => state.user);

    const { clinics, userId, name, email, bookingByUser } = user;

    useEffect(()=>{
        props.dispatch(getBookingByuser(userId))
    },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
                 <Grid container justifyContent={"center"} spacing={2} p={0}>
                <Grid item xs={12} md={12} lg={12} style={{textAlign:'center'}}>
                    <Typography variant='h4'>
                        Hello, {name}
                    </Typography>
</Grid>


    
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ minWidth: 475 }}>
            <CardContent>
              <Typography variant="h6" component="div">
               Total bookings - {bookingByUser.length}
              </Typography>
 

            </CardContent>
        
          </Card>
        </Grid>
   
    </Grid>
        </Box>
    )
}

export default connect()(Home);