import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

import SignUp from "../Pages/SignUp";
import NotFound from "../Pages/NotFound";
import BasicLayouts from "../Layouts/BasicLayouts";
import Login from "../Pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}