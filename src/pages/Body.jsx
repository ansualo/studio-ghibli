import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}