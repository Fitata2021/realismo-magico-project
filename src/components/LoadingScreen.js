import React from "react";
import "../styles/LoadingScreen.css";
import "../styles/NavBar.css";
// import butterfly from "../images/utils-images/picmix.com_1899742.gif";
const butterfly =
  "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/a41b14be-44d1-4054-dadb-b17b3f402d00/public";

const LoadingScreen = () => {
  return (
    <div className="overlay">
      {/* <div class="lds-circle">
        <div></div>
      </div> */}
      <div>
        <img src={butterfly} alt="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
