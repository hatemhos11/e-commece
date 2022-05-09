import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Err404 from "./pages/Err404";


export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="product:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Err404 />} />
        </Routes>
    );
}
