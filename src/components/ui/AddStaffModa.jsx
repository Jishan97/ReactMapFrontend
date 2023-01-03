import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { addClinic, addStaff, getAllClinics } from "../../redux/action/userActions";

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

function AddStaffModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setState({
      name: "",
      role:"",
      email:"",
      expertise:""
    });
  };
  const handleClose = () => setOpen(false);


  const [state, setState] = React.useState({
    name: "",
    role:"",
    email:"",
    expertise:""
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
    console.log(props.id)
    let formdata = {
        name:state.name,
        role:state.role,
        email:state.email,
        expertise:state.expertise
    }

    props.dispatch(addStaff(formdata, props.id))


    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ m: 1 }}>
        Add 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Staff for  {props.clinicName}
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
              label="role"
              variant="outlined"
              name="role"
              value={state.role}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="expertise"
              variant="outlined"
              name="expertise"
              value={state.expertise}
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


export default connect()(AddStaffModal);