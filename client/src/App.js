import React from "react";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const {user} = useContext(Context); 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/post/:postId" element={<Single/>} />
        <Route path="/write" element={user ? <Write/> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
