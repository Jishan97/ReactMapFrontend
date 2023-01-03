import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { addClinic, getAllClinics } from "../../redux/action/userActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddClinicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setState({
      name: "",
      address: "",
      postcode: "",
      serviceName: "",
      servicePrice: 0,
      lat:0,
      lng:0
    });
  };
  const handleClose = () => setOpen(false);


  const [state, setState] = React.useState({
    name: "",
    address: "",
    postcode: "",
    serviceName: "",
    servicePrice: 0,
    lat:0,
    lng:0
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = {
        name:state.name,
        address:state.address,
        postcode:state.postcode,
        servicePrice:state.servicePrice,
        lat:state.lat,
        lng:state.lng
    }

    props.dispatch(addClinic(formdata))


    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ m: 1 }}>
        Add Clinic
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Clinic
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              value={state.address}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Postcode"
              variant="outlined"
              name="postcode"
              value={state.postcode}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Service Name"
              variant="outlined"
              name="serviceName"
              value={state.serviceName}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Service Price"
              variant="outlined"
              name="servicePrice"
              type='number'
              value={state.servicePrice}
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="lat"
              variant="outlined"
              name="lat"
              type='number'
              value={state.lat}
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="lng"
              variant="outlined"
              name="lng"
              type='number'
              value={state.lng}
              onChange={handleChange}
            />
            <br />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default connect()(AddClinicModal);