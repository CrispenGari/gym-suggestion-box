import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import "./Banner.css";
import { banners } from "../../constants";

interface Props {}
const Banner: React.FC<Props> = ({}) => {
  const [banner, setBanner] = React.useState<number>(0);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      if (banner === banners.length - 1) {
        setBanner(0);
      } else {
        setBanner(banner + 1);
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [banner]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${banners[banner]})`,
      }}
    >
      <h1>GYM Suggestion Box</h1>
      <div className="banner__socials">
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
      </div>
      <p>
        Welcome to <strong>K&B</strong> Fitness Zone. Read Terms and Conditions{" "}
        <Link to={"/tnc"}>here</Link>.
      </p>
    </div>
  );
};

export default Banner;
