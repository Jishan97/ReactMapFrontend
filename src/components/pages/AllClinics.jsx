import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getAllClinics } from "../../redux/action/userActions";
import AddClinicModal from "../ui/AddClinicModal";
import AddStaffModal from "../ui/AddStaffModa";

const AllClinics = (props) => {
  const user = useSelector((state) => state.user);

  const { clinics } = user;

  useEffect(() => {
    props.dispatch(getAllClinics());
  }, []);

  return (
    <Grid container justifyContent={"center"} spacing={2} p={0}>
                <Grid item xs={12} md={12} lg={12} style={{textAlign:'center'}}>
        <AddClinicModal/>
</Grid>
      {clinics.map((eachClinic) => (
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {eachClinic.name}
              </Typography>
              <Typography variant="h5" component="div">
                Address - {eachClinic.address}
              </Typography>

              <Typography variant="h5" component="div">
                Service - {eachClinic.servicesName}
              </Typography>

              <Typography variant="h5" component="div">
                Cost - £{eachClinic.servicePrice}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Address - {eachClinic.address} , {eachClinic.postcode}
              </Typography>
              {/* <Divider /> */}
              <Typography variant="h5" component="div">
                Staffs
              </Typography>

              {eachClinic.staffs.map((eachStaff) => (
                <>
                  <Typography color="text.secondary">
                    Name - {eachStaff.name}
                  </Typography>

                  <Typography color="text.secondary">
                    Name - {eachStaff.role}
                  </Typography>

                  <Typography color="text.secondary">
                    Name - {eachStaff.email}
                  </Typography>

                  <Typography color="text.secondary">
                  Expertise - {eachStaff.expertise}
                  </Typography>
                  <Divider />

                </>
              ))}
            </CardContent>
            <CardActions>
                <AddStaffModal id={eachClinic._id} clinicName={eachClinic.name}/>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default connect()(AllClinics);
