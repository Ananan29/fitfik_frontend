import React,{useState} from "react";
import "./Navigationbar.css";
import {IoIosBody} from "react-icons/io";
import logo from "../../assets/purplestar.png"
import Authopopup from "../Authopopup/Authopopup";



const Navigationbar = ({lightdarkmodeswitch}) => {
  const [isloggedin,setisloggedin]=useState(false)
  const [showpopup, setShowpopup] = useState(false)
  return (
    <nav>
      <img src={logo} alt="logo" className="img"/>
      <a href="/" className="a">Home</a>
      <a href="/about" className="a">About</a>
      <a href="/contact" className="contact">Contact</a>
      <a href="/profile" className="profile"><IoIosBody/></a>
      
      {
        isloggedin?
        <button className="btn">Logout</button>:
        <button onClick={() => {
          setShowpopup(true)
        }}>Login</button>
      }
      <button className="lightdarkmode" onClick={()=>(lightdarkmodeswitch())}/>
      {
        showpopup&& <Authopopup setShowpopup={setShowpopup}/>
        // <h1 className="mainhead1">Login page</h1>
      }
    </nav>
  )
}

export default Navigationbar