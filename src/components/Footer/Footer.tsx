import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <div className="footer__contents">
        <div className="footer__socials">
          <h1>Social Medias</h1>
          <p>
            <a
              href="http://"
              style={{
                color: "#1192F2",
              }}
            >
              <BsFacebook />
            </a>
            <a
              href="http://"
              style={{
                color: "#FE0100",
              }}
            >
              <ImYoutube />
            </a>
            <a href="http://" style={{ color: "#1DA1F2" }}>
              <SiTwitter />
            </a>
            <a
              href="http://"
              style={{
                color: "#F70A66",
              }}
            >
              <AiFillInstagram />
            </a>
          </p>
        </div>
        <div className="footer__contacts">
          <h1>CONTACTS</h1>
          <p>
            <span>Tel</span>
            <span>081 511 9731</span>
          </p>
          <p>
            <span>Email</span>
            <span>admin@gmail.com</span>
          </p>
        </div>
        <div className="footer__address">
          <h1>PHYSICAL ADDRESS</h1>
          <p>
            <span>73 Station Road</span>
            <span>Matatiele</span>
          </p>
        </div>
      </div>
      <p>
        Copyright © {new Date().getFullYear()} K&B Inc. All rights reserved.{" "}
        <Link to={"/tnc"}>Terms & Conditions</Link>
      </p>
    </div>
  );
};

export default Footer;
