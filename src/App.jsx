import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigationbar from "./components/Navigationbar/Navigationbar"
import Homebanner1 from "./components/Homebanner1/Homebanner1"
import Homebanner2 from "./components/Homebanner2/Homebanner2"
import Page from "./Workout/Page"
import ReportPage from "./report/ReportPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import ProfileForm from './components/Profile/ProfileForm'
import About from "./components/About/About"
import Contact from './components/Contact/Contact'
function App() {
  //const navigate=Navigate();
  const [lightdarkmode, setlightdarkmode] = useState("light")
  const divvstyle={
    light: {backgroundColor: "rgb(255, 255, 255)"},
    dark: {backgroundColor:"rgb(0, 0, 0)"}
  }
  const lightdarkmodeswitch=()=>{
    if(lightdarkmode==="dark"){
      setlightdarkmode("light")
    }
    else if(lightdarkmode==="light"){
      setlightdarkmode("dark")
    }
    else{
      console.log("error")
    }
  }
  console.log(lightdarkmode)
  return (
    <div className="divv" style={lightdarkmode=="light"?divvstyle.dark:divvstyle.light}>
    <Router>
      <Navigationbar lightdarkmodeswitch={lightdarkmodeswitch}/>
      <Routes>
        <Route path="/" element={<>
          <Homebanner1/>
      <Homebanner2/>
      </>}/>
      
        <Route path="/workout/:type" element={<Page/>}/>
        <Route path="/report/:name" element={<ReportPage/>}/>
        {/* <Route path="/report/Calorie%20Intake" element={<ReportPage />} /> */}
        <Route path="/profile" element={<ProfileForm/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <ToastContainer className={"gggg"}/>
    </Router>
    </div>
  )
}

export default App