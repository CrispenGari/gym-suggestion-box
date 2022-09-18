import React from "react";
import { Routes as R, Route } from "react-router-dom";
import { Home, Admin, NotFound } from "../pages";

export const Routes = () => {
  return (
    <R>
      <Route path="/" caseSensitive element={<Home />} />
      <Route path="/admin" caseSensitive element={<Admin />} />
      <Route path="*" element={<NotFound />} caseSensitive />
    </R>
  );
};
