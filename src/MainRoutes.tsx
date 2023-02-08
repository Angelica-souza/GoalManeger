import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Register />} path="/Register" />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes