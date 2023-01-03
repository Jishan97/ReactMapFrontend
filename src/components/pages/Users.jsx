import { Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/action/userActions';

const Users = (props)=>{
    const user = useSelector((state) => state.user);

    const { allUsers } = user;


    useEffect(()=>{
        props.dispatch(getAllUsers())
        console.log('from user component', allUsers)
    },[])

    return (

        <Grid container  justifyContent={"center"} spacing={2} p={4} flexDirection='column' direction='column'>

{allUsers.map((eachUser) => (
   <Grid  justifyContent={"center"} p={0} sx={{display:'flex'}}>
<Grid  item xs={12} md={6} lg={3} spacing={2} m={1}>
  <Card sx={{ minWidth: 275, minHeight:275 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {eachUser.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Gender - {eachUser.gender}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Email - {eachUser.email}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Phone - £{eachUser.phone}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Address - {eachUser.address} , {eachUser.postcode}
      </Typography>
      {/* <Divider /> */}

      </CardContent>
      </Card>
    </Grid>
     
<Grid item xs={12} md={6} lg={3} m={1}>

      {  eachUser.bookings.length >  0 ? eachUser.bookings.map((eachBooking) => (
          <>
            <Card sx={{ minWidth: 275, minHeight:275 }}>
    <CardContent>
            <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
        Bookings
      </Typography>
          <Typography color="text.secondary">
            Clinic ID - {eachBooking.clinicId}
          </Typography>

          <Typography color="text.secondary">
            Date - {eachBooking.date}
          </Typography>

          <Typography color="text.secondary">
            Status - {eachBooking.status}
          </Typography>

          <Divider />
          </CardContent>
          </Card>
        </>
      ))  : (
        <Card sx={{ minWidth: 275, minHeight:275 }}>
<CardContent>
              <Typography variant="h5" component="div">
        Bookings
      </Typography>
<p>No bookings yet</p>
      </CardContent>
      </Card>
      )  }
          </Grid>


</Grid>

))}
</Grid>
    
    )
}

export default connect()(Users);
