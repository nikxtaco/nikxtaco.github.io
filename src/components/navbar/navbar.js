import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./navbar.css"

import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"


const Navbar = () => {

   const { width } = useWindowDimensions();
   
   const [navbarVisibility, setNavbarVisibility] = useState(false);

   function toggleVisibility(){
      setNavbarVisibility(!navbarVisibility)
      console.log(navbarVisibility)
   }

   const customNavbar = {
      backgroundColor: "#000000cc",
      fontFamily:"'Poppins',sans-serif",
      height: "100%",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: width<750?"45vh":"30vh",
      textAlign: width<750?"left":"center",
      width: navbarVisibility ? "100vw" : "0",
   }

   const customNavbarA = {
      padding: "8px 8px 8px 32px",
      textDecoration: "none",
      fontSize: width<750?"25px":"10rem",
      color: "white",
      display: "block",
      transition: "0.3s",
   }

   return (
      <div className="navbar">

      <HLink to="/">
      {
      width>750?
      <UseAnimations
      animationKey="infinity"
      size={150} //50
      style={{ color: "white", cursor: "pointer", marginLeft: "7vw", marginTop: "-16vh", position: "absolute", zIndex: "5" }}
      />:
      <UseAnimations
         animationKey="infinity"
         size={30} 
         style={{ color: "white", cursor: "pointer", marginLeft: "10vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}
      />
      }
      </HLink>
        
        <div onClick={toggleVisibility}>
        {
      width>750?
      <UseAnimations
        animationKey="menu2"
        size={120} //30
        style={{ color: "white", cursor: "pointer", marginLeft: "89vw", marginTop: "-16vh", position: "absolute", zIndex: "5" }}
      />:
      <UseAnimations
        animationKey="menu2"
        size={30}
        style={{ color: "white", cursor: "pointer", marginLeft: "85vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}
      />
      }
       </div>

       <div className="navbar" style={customNavbar}>
         <HLink to="/" style={customNavbarA}>Home</HLink>
         <a href="/projects" style={customNavbarA}>Projects</a>
         <HLink to="/blog" style={customNavbarA} >Blog</HLink>
         <a href="/contact" style={customNavbarA} >Contact</a>
         <span style={{}}>
         <a href="https://www.github.com/nikxtaco">
       {
      width>750?
      <UseAnimations
        animationKey="github"
        size={150}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"38vw", paddingTop: "10vh" }}
      />:
      <UseAnimations
        animationKey="github"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "3vh" }}
      />
      }
         </a>
         <a href="https://instagram.com/nikxtaco">
         {
      width>750?
      <UseAnimations
        animationKey="instagram"
        size={150}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}
      />:
      <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "3vh" }}
      />
      }
      </a>
         <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
        {
      width>750?
      <UseAnimations
        animationKey="linkedin"
        size={150}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}
      />:
      <UseAnimations
        animationKey="linkedin"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "3vh" }}
      />
      }
         </a>
         <a href="https://twitter.com/nikxtaco">
         {
      width>750?
      <UseAnimations
        animationKey="twitter"
        size={150}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}
      />:
      <UseAnimations
        animationKey="twitter"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "3vh" }}
      />
      }
         </a>
         </span>
       </div>
       
       {/* <div className="look_up_bg">
      <h6 className="look_up" onClick={() => {window.scrollTo(0, 0)}}>
        <UseAnimations
        animationKey="arrowUp"
        size={20}
        style={{ color: "black", cursor: "pointer", padding:"5px", margin:"0", float:"left", paddingBottom:"0"  }}
      />
      </h6>
      </div> */}

      </div>
   )
}

export default Navbar