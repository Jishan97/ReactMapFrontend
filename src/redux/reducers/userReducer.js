import { UserConstant } from "../constants";
const userInitialState = {
  user: {},
  token: localStorage.getItem('token'),
  loading: false,
  isLoggedIn: localStorage.getItem('token') ? true : false,
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  error: "",
  clinics:[],
  allUsers:[]

};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UserConstant.SET_USER: {
      
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('email', action.payload.email)
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.data.user.name,
        email: action.payload.data.user.email,
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
