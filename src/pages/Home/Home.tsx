import React from "react";
import { Banner } from "../../components";
import "./Home.css";
interface Props {}
const Home: React.FC<Props> = ({}) => {
  return (
    <div className="home">
      <Banner />
    </div>
  );
};

export default Home;
