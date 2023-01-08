import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { getAllReports, getBookingByuser } from '../../redux/action/userActions';



const Report = (props)=>{
    const user = useSelector((state) => state.user);

    const { clinics, userId, allReports } = user;

    useEffect(()=>{
        props.dispatch(getAllReports())
        
    },[])

    return (
        <Grid container justifyContent={"center"} spacing={2} p={0}>
                <Grid item xs={12} md={12} lg={12} style={{textAlign:'center'}}>
                    <Typography variant='h4'>
                        All Reports
                    </Typography>
</Grid>


      {allReports.map((eachReport) => (
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ minWidth: 475 }}>
            <CardContent>
              <Typography variant="h6" component="div">
               Title -  {eachReport.title}
              </Typography>
              <Typography variant="h6" component="div">
                Patient ID - {eachReport.patientId}
              </Typography>

              <Typography variant="h6" component="div">
                Clinic ID - {eachReport.ClinicId}
              </Typography>

              <Typography variant="h6" component="div">
                Staff ID - {eachReport.staffId}
              </Typography>

              <Typography variant="h6" component="div">
                Staff Name - {eachReport.staffName}
              </Typography>

              
              <Typography variant="h6" component="div">
                Critical - {eachReport.critical ? 'Yes' : 'No'}
              </Typography>

              
              <Typography variant="h6" component="div">
                Alert - {eachReport.alert ? 'Yes' : 'No'}
              </Typography>

                            
              <Typography variant="h6" component="div">
                Detailed Report
              </Typography>
              <Typography variant="h6" component="div">
               Hemoglobin -  {eachReport.detailedReport.hemoglobin}
              </Typography>

              <Typography variant="h6" component="div">
               RBC -  {eachReport.detailedReport.rbc}
              </Typography>

              <Typography variant="h6" component="div">
               MCU -  {eachReport.detailedReport.mcu}
              </Typography>

              <Typography variant="h6" component="div">
               PLT -  {eachReport.detailedReport.plt}
              </Typography>
            </CardContent>
        
          </Card>
        </Grid>
      ))}
    </Grid>
 
        
    )
}

export default connect()(Report);