import React from "react";
import { Routes } from "./routes";
import "./App.css";
import { Header, Footer } from "./components";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Routes />
        <Footer />
      </div>
    </div>
  );
};
