import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={{user ? <Home/> : <Register/>}} />
        <Route path="/login" element={<Login/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/post/:postId" element={<Single/>} />
        <Route path="/write" element={<Write/>} />
      </Routes>
    </Router>
  );
}

export default App;
