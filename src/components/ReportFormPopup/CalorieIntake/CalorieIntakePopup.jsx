import React,{useEffect, useState} from "react"
import "../popup.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePicker from "react-horizontal-datepicker";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai"
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// interface CaloriIntakePopupProps {
//   setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
// }
import config from "./../../../config"
import {toast} from "react-toastify"
const CalorieIntakePopup = ({ setShowCalorieIntakePopup,reloadfunc }) => {
  const color = "#ffc20e"

  const [date, setdate] = useState(
    // new Date()
    dayjs());
  const [time, settime] = useState(
    // new Date()
    dayjs());
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));
  const [calorieintake, setcalorieintake] = useState({
    item:"",date:"",quantity:"",quantitytype:"g"
  })
  const [items, setitems] = useState([])
  const [changemade,setchangemade]=useState([false])
  // const selectedDay = (val) => {
  //   // console.log(val);
  // }
  const savecalorieintake=async()=>{
    // console.log("g")
    // try(
      let tempdate=date.format("YYYY-MM-DD")
    let temptime=date.format("HH:mm:ss")
    let tempdatetime=tempdate+"T"+temptime
    let finaldatetime=new Date(tempdatetime).toISOString();
    // console.log(finaldatetime)
    const payload = {
      name: calorieintake.item,
      date: finaldatetime,
      quantity: calorieintake.quantity,
      quantitytype: calorieintake.quantitytype
    };
    // console.log('Sending payload:', JSON.stringify(payload));

    const authToken = localStorage.getItem('auth-token');

    fetch(`${config.API_BASE_URL}/calorieintake/addcalorieintake`,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        // "auth-token":localStorage.getItem("auth-token")||""
        'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
      },
      credentials:"include",
      body:JSON.stringify({
        name:calorieintake.item,
        date:finaldatetime,
        quantity:calorieintake.quantity,
        quantitytype:calorieintake.quantitytype
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.ok){
        getcalorieintake();
        setchangemade(true);
        toast.success("Calorie intake added successfully");
        // const x=()=>(
          // reloadfunc()
          // );
        console.log("heehee");
        // x();
        
      }
      else{
        toast.error("error in adding calorie intake");
      }
    })
    // )
    .catch(err=>{
      toast.error("error in adding calorie intake");
      console.log(err);
    })
  }
  const getcalorieintake=async()=>{
    setitems([])
    fetch(`${config.API_BASE_URL}/calorieintake/getcalorieintakebydate`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify({
        date:date
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.ok){
        // console.log(data.data,"calorie intake data for date")
        setitems(data.data)
      }
      else{
        toast.error("error in getting calorie intake")
      }
    })
    .catch(err=>{
      toast.error("error in getting calorie intake")
      console.log(err)
    })
  }
  const deletecalorieintake=async(item)=>{
    console.log(item, "item")
    fetch(`${config.API_BASE_URL}/calorieintake/deletecalorieintake`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
      },
      credentials:"include",
      body:JSON.stringify({
        name:item.item, //name item
        date:item.date
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.ok){
        // console.log(data.data,"calorie intake item deleted successfully")
        toast.success("calorie intake item deleted successfully")
        getcalorieintake()
        setchangemade(true);
      }
      else{
        toast.error("error in deleting calorie intake")
      }
    })
    .catch(err=>{
      toast.error("error in deleting calorie intake");
      console.log(err);
    })
  }
  const buttonclicked=()=>{
    console.log("inside",changemade)
    if(changemade==true){
      reloadfunc();
    }
    setShowCalorieIntakePopup(false)
  }
  useEffect(()=>{
    getcalorieintake()
  },[date])
  useEffect(() => {
    console.log('food items: ', items);
  }, [items]);
//   useEffect(() => {
//     console.log("CalorieIntakePopup rendered");
//   }, []);
  // useEffect(()=>{
  //   console.log(changemade)
  // },[changemade])
  // console.log(changemade)
//   const selectedday=(val)=>{
//     setdate(val)
//   }
  return (
    // <div>CalorieIntakePopup</div>
    <div className="popupout">

      
      <div className="popupbox">
      Calorieintakepopup
        <button className="close"
          onClick={buttonclicked
          }
        >
          <AiOutlineClose />
        </button>

        {/* <DatePicker getSelectedDay={selectedDay}
          endDate={100}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={color}
        /> */}

        <TextField id="outlined-basic" label="Food item name" variant="outlined" color="warning" 
        onChange={(e)=>{setcalorieintake({...calorieintake,item:e.target.value})}}/>
        <TextField id="outlined-basic" label="Food item amount (in gms)" variant="outlined" color="warning"  
        onChange={(e)=>{setcalorieintake({...calorieintake,quantity:e.target.value})}}/>
        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock value={value} onChange={(newValue) => setValue(newValue)}
            />
            <DatePicker label="Basic example" value={date} onChange={(newvalue)=>(selectedDay(newvalue))}/>
          </LocalizationProvider>

        </div>
        <Button variant="contained" color="warning" onClick={savecalorieintake}>
          Save
        </Button>
        <div className="hrline"></div>
        <div className="items">
          {/* <div className="item">
            <h3>Apple</h3>
            <h3>100 gms</h3>
            <button> <AiFillDelete /></button>
          </div>
          <div className="item">
            <h3>Banana</h3>
            <h3>200 gms</h3>
            <button> <AiFillDelete /></button>
          
          </div> */}
          {
            items.map((item,index)=>{
              return(
                <div key={index} className={"item"}>
                  <h3>{item.item}</h3>
                  <h3
                  >{item.quantity}{item.quantitytype}</h3>
                  <button className="buttonn" onClick={()=>{
                    deletecalorieintake(item)
                  }}>
                    <AiFillDelete/>
                  </button>
                </div>
              )
            })
          }
          {/* <div className="item">
            <h3>Rice</h3>
            <h3>300 gms</h3>
            <button> <AiFillDelete /></button>

          </div> */}
        </div>
      </div>
    </div>

  )
}

export default CalorieIntakePopup

// import React from 'react'

// const CalorieIntakePopup = () => {
//   return (
//     <div>CalorieIntakePopup</div>
//   )
// }

// export default CalorieIntakePopup