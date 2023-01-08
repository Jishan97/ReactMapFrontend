import axios from "../../config/axios";
import { UserConstant } from "../constants";
import { toast } from "react-toastify";




export const setLoading = () => {
  return {
    type: UserConstant.SET_LOADING,
    payload: true
  }
}

export const startLoginUser = (formData, redirect, errorRedirect) => {

  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.post(
        "/api/users/login",
        formData,
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      let parseToken = res.data.token.split(" ")
      let finalToken = parseToken[1]
    
      console.log(res.data)
      console.log(finalToken)

      dispatch({
        type: UserConstant.SET_USER,
        payload: res.data.allDetails
      })
        console.log('//////')
        localStorage.setItem("token", finalToken);
        // dispatch(getBookingByuser())
        redirect();
        
      
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response.data.emailnotfound);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response.data);
    }
    }
  };
};

export const getAllClinics = (formData, redirect, errorRedirect) => {

  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.get("/api/clinic/allClinic");
      if (res) {
        
        dispatch({
          type: UserConstant.GET_ALL_CLINICS,
          payload: res.data
        })
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};


export const getAllUsers = (formData, redirect, errorRedirect) => {

  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.get("/api/users/allUsers");

      console.log(res.data)
      if (res) {
        
        dispatch({
          type: UserConstant.GET_ALL_USERS,
          payload: res.data
        })
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};


export const getBookingByuser = (id, redirect, errorRedirect) => {

  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.get(`/api/users/bookingByUser/${id}`);

      console.log(res.data)
      if (res) {
        
        dispatch({
          type: UserConstant.GET_BOOKING_USER,
          payload: res.data
        })
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};


// export const getBookingByuser = () => {

//   return async (dispatch) => {
//     dispatch(setLoading())
//     try {
//       let res = await axios.get("/api/users/current");

//       console.log(res.data)
//       if (res) {
        
//         dispatch({
//           type: UserConstant.GET_BOOKING_USER,
//           payload: res.data
//         })
//         // redirect();
//       }
//     } catch (error) {
//       if (error.response) {
//         dispatch({
//           type: UserConstant.SET_LOADING,
//           payload: false
//         })
//         // errorRedirect(error.response);
//         // toast.warn(error.response.data.message, { position: "top-center" });
//         console.log("error", error.response);
//     }
//     }
//   };
// };




export const getAllReports = (redirect, errorRedirect) => {

  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.get("/api/users/allReports");

      console.log(res.data)
      if (res) {
        
        dispatch({
          type: UserConstant.GET_ALL_REPORTS,
          payload: res.data
        })
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};

export const addClinic = (formData, redirect, errorRedirect) => {
  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.post(
        "/api/clinic/addClinic",
        formData,
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
  
    
      console.log(res.data)

      if (res) {
        console.log('//////')
        dispatch({
          type: UserConstant.ADD_CLINIC
        })

        dispatch(getAllClinics())
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};



export const addStaff = (formData, id, redirect, errorRedirect) => {
  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.put(
        `/api/clinic/addStaff/${id}`,
        formData,
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      console.log(res.data)

      if (res) {
        console.log('//////')
        dispatch({
          type: UserConstant.ADD_STAFF
        })

        dispatch(getAllClinics())
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};

export const addBooking = (formData, id, redirect, errorRedirect) => {
  return async (dispatch) => {
    dispatch(setLoading())
    try {
      let res = await axios.put(
        `/api/users/makeBooking/${id}`,
        formData,
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      console.log(res.data)

      if (res) {
        console.log('//////')
        dispatch({
          type: UserConstant.ADD_STAFF
        })

        dispatch(getAllClinics())
        redirect();
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect(error.response);
        // toast.warn(error.response.data.message, { position: "top-center" });
        console.log("error", error.response);
    }
    }
  };
};





export const startRegisterUser = (formData, redirect, errorRedirect) => {

    console.log('actions', formData)
  // setLoading();
  return async (dispatch) => {
    dispatch(setLoading())

    navigator.geolocation.getCurrentPosition(function(position) {
        formData.lat = position.coords.latitude;
        formData.lng  = position.coords.longitude
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });


console.log(formData)
    try {
      let res = await axios.post(
        "/api/users/register",
        formData,
        {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      );

      if (res) {

        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })

        redirect();
      }
    } catch (error) {
      if (error.response.data.email == 'Email already exists') {
        dispatch({
          type: UserConstant.SET_LOADING,
          payload: false
        })
        errorRedirect('Email already exists, use another email');

        // toast.warn("Email already exists, use another email", { autoClose: 1000 });
      }
      console.log("error", error.response.data);
    }
  };
};


export const startLogout = (redirect) => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    dispatch({
      type: UserConstant.LOGOUT_USER
    })
    redirect();
  }
}


