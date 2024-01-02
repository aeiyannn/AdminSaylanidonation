import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import Usercheck from "../Components/Usercheck";
import Addslider from "../Components/Addslider";
import Addpost from "../Components/Addpost";
import Viewpost from "../Components/Viewpost";

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Usercheck" element={<Usercheck />} />
        <Route path="/addslider" element={<Addslider />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/viewpost" element={<Viewpost />} />
      </Routes>
    </>
  );
}
