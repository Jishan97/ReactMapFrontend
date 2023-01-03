import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/auth/Landing";
import LoginComponent from "./components/auth/Login";
import RegisterComponent from "./components/auth/Register";
import AllClinics from "./components/pages/AllClinics";
import Booking from "./components/pages/Booking";
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import Report from "./components/pages/Reports";
import Users from "./components/pages/Users";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />

      <Route exact path="/login" element={<LoginComponent />} />
      <Route exact path="/register" element={<RegisterComponent />} />

    
      {/* Private route starts */}
      <Route path="/home" element={<PrivateRoute component={Home} />} />
      <Route path="/map" element={<PrivateRoute component={Map} />} />
      <Route path="/bookings" element={<PrivateRoute component={Booking} />} />
      <Route path="/reports" element={<PrivateRoute component={Report} />} />
      <Route path="/users" element={<PrivateRoute component={Users} />} />
      <Route path="/clinics" element={<PrivateRoute component={AllClinics} />} />

      {/* Private route ends */}




    </Routes>
  );
};

export default App;
