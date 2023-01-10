import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { getBookingByuser } from '../../redux/action/userActions';



const Booking = (props)=>{
    const user = useSelector((state) => state.user);

    const { clinics, userId, bookingByUser } = user;

    useEffect(()=>{
        props.dispatch(getBookingByuser(userId))
        
    },[])

    return (
        <Grid container justifyContent={"center"} spacing={2} p={0}>
                <Grid item xs={12} md={12} lg={12} style={{textAlign:'center'}}>
                    <Typography variant='h4'>
                        All Bookings
                    </Typography>
</Grid>


      {bookingByUser.map((eachBooking) => (
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ minWidth: 475 }}>
            <CardContent>
              <Typography variant="h6" component="div">
               Clinic ID -  {eachBooking.clinicId}
              </Typography>
              <Typography variant="h6" component="div">
                Date - {eachBooking.date}
              </Typography>

              <Typography variant="h6" component="div">
                Status - {eachBooking.status}
              </Typography>

            </CardContent>
        
          </Card>
        </Grid>
      ))}
    </Grid>
 
        
    )
}

export default connect()(Booking);