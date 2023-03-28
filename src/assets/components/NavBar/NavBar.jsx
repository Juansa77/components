import React from "react";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="navigation">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>User</li>
        <li>Log Out</li>
      </ul>
      <div  onClick={toogleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>

      <style jsx>{`
        .navigation {
          width: 100%;
          height: 2vh;
        }

        .navigation ul {
          display: flex;
         justify-content: space-around;
          margin: 0 20px;
          padding: 0 25px;
       
        }
        .navigation ul li {
          list-style-type: none;
          width:100%;
        }

        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            float: right;
            padding-top: 10px;
            width:5vw;
            padding-left:3vw;
           
         
            z-index: 6;
          }

       
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            text-align:left;
            padding:5vh;
            background-color: black;
            color: white;
            z-index:10;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }

          .navigation ul li{
            margin-top:1vh;
          }

          .navigation ul li:hover{
            background-color: white;
            color:black;
 
          }

          .burger{

            width:${hamburgerOpen ? "3rem" : "3rem"};


          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
