import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./navbar.css"

import UseAnimations from "react-useanimations";


const Navbar = () => {
   
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
      paddingTop: "45vh",
      textAlign: "left",
      width: navbarVisibility ? "100vw" : "0",
   }

   const customNavbarA = {
      padding: "8px 8px 8px 32px",
      textDecoration: "none",
      fontSize: "25px",
      color: "white",
      display: "block",
      transition: "0.3s",
   }

   const customNavbarAHover = {
      color: "#f1f1f1",
   }

   return (
      <div className="navbar">

      <HLink to="/home">
      <UseAnimations
        animationKey="infinity"
        size={30}
        style={{ color: "white", cursor: "pointer", marginLeft: "10vw", marginTop: "-13vh", position: "absolute", zIndex: "5" }}
      />
      </HLink>
        
        <div onClick={toggleVisibility}>
      <UseAnimations
        animationKey="menu2"
        size={30}
        style={{ color: "white", cursor: "pointer", marginLeft: "85vw", marginTop: "-13vh", position: "absolute", zIndex: "5" }}
      />
       </div>

       <div className="navbar" style={customNavbar}>
         <HLink to="/home" style={customNavbarA} onHover={""}>Home</HLink>
         <a href="" style={customNavbarA} onHover={""}>About</a>
         <HLink to="/blog" style={customNavbarA} onHover={""}>Blog</HLink>
         <a href="" style={customNavbarA} onHover={""}>Contact</a>
         <span style={{}}>
         <a href="https://www.github.com/nikxtaco">
         <UseAnimations
        animationKey="github"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "3vh" }}
      />
         </a>
         <a href="https://instagram.com/nikxtaco">
            <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px", paddingTop: "3vh"  }}
      /></a>
         <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
         <UseAnimations
        animationKey="linkedin"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px", paddingTop: "3vh"  }}
      />
         </a>
         <a href="https://twitter.com/nikxtaco">
         <UseAnimations
        animationKey="twitter"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px", paddingTop: "3vh"  }}
      />
         </a>
         </span>
       </div>

      </div>
   )
}

export default Navbar



// return (
//    <div className="navbar">
//       <div className="navbar-fixed">
//          <nav className="nav-wrapper " style={{ "background-color": "#5B43EF" }}>
//             <div className="container">
//                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
//                   <i className="material-icons" style={{ color: "#dfdfdf" }}>menu</i>
//                </a>
//                <img src={img} alt="" className="logo"/>
//                <ul className="right hide-on-med-and-down" >
//                   {links.map(link => (
//                      <li key={link.id}>
//                         <HLink style={{'color':'#dfdfdf'}} to={link.to} >{link.Name}</HLink>
//                      </li>
//                   ))}
//                   <li >
//                      <a style={{'color':'#dfdfdf'}} href={"https://dash.alrt.ai"} >{"Login"}</a>
//                   </li>

//                </ul>
//             </div>
//          </nav>
//       </div>

//       <ul className="sidenav" id='mobile-nav' style={{ "background-color": "#5B43EF", 'padding-top':'20vh' }}>
//          {links.map(link => (
//             <li key={link.id} >
//                <HLink className='white-text' style={{'margin':'5vh 0', 'text-align':'center'}}
//                to={link.to} >{link.Name}</HLink>
//             </li>
//          ))}
//       </ul>
//    </div>
// )
