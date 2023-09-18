import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home/Home";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}