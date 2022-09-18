import React from "react";
import { BrowserRouter } from "react-router-dom";
interface PropsType {
  children: any;
}
const RouterProvider: React.FC<PropsType> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;
