import { UserConstant } from "../constants";
const userInitialState = {
  user: {},
  token: localStorage.getItem('token'),
  loading: false,
  isLoggedIn: localStorage.getItem('token') ? true : false,
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  userId:localStorage.getItem('userId'),
  level:localStorage.getItem('level'),
  error: "",
  clinics:[],
  allUsers:[],
  bookingByUser:[],
  allReports:[]

};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UserConstant.SET_USER: {
      
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('userId', action.payload._id);
      localStorage.setItem('level', action.payload.level);



      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        userId:action.payload._id,
        level:action.payload.level,
        isLoggedIn: true,
        loading: false
      }




    }
    case UserConstant.LOGOUT_USER: {
      return {
        token: null,
        name: "",
        email: "",
        isLoggedIn: false,
        loading: false

      };
    }


    case UserConstant.GET_ALL_CLINICS: {
      return {
        ...state,
        clinics:action.payload,
        loading: false

      };
    }

    case UserConstant.GET_ALL_REPORTS: {
      return {
        ...state,
        allReports:action.payload,
        loading: false

      };
    }

    case UserConstant.GET_BOOKING_USER:{
      return {
        ...state,
        bookingByUser:action.payload
      }
    }

    case UserConstant.GET_ALL_USERS: {
      return {
        ...state,
        allUsers:action.payload,
        loading: false

      };
    }


    case UserConstant.ADD_CLINIC:{
      return {
        ...state,
        loading: false

      };
    }

    case UserConstant.ADD_STAFF:{
      return {
        ...state,
        loading: false

      };
    }

    case UserConstant.SET_ERRORS: {
      return {
        ...state,
        error: action.payload
      }
    }

    case UserConstant.SET_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
