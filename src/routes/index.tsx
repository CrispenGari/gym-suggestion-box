import React from "react";
import { Routes as R, Route } from "react-router-dom";
import { Home, Admin, NotFound, TnC } from "../pages";
export const Routes: React.FC = () => {
  return (
    <R>
      <Route path="/" caseSensitive element={<Home />} />
      <Route path="/admin" caseSensitive element={<Admin />} />
      <Route path="/tnc" caseSensitive element={<TnC />} />
      <Route path="*" element={<NotFound />} caseSensitive />
    </R>
  );
};
