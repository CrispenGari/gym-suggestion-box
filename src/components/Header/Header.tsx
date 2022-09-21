import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
interface Props {}
const Header: React.FC<Props> = ({}) => {
  const router = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <img
          alt="logo"
          src="/logo2.png"
          onClick={() => {
            router("/");
          }}
        />
      </div>
      <div className="header__right">
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Header;
