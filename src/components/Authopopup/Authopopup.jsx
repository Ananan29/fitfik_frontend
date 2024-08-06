import React,{useState} from "react"
// import { SyntheticEvent } from "react"
// import Image from 'next/image'
import "./Authopopup.css"
import logo from "../../assets/logo.jpeg"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {AdapterDayjs} from 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
// interface AuthPopupProps {
//     setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
// }
import dayjs from 'dayjs';
import config from '../../config';
// interface SignupFormData {
//     name: String | null,
//     email: String | null,
//     password: String | null,
//     weightInKg: Number | null,
//     heightInCm: Number | null,
//     goal: String | null,
//     gender: String | null,
//     dob: Date | null,
//     activityLevel: String | null
// }
const Authopopup = ({setShowpopup}) => {
    const [showsignup, setshowsignup] = useState(false)
    const [signupformData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: new Date(),
        activityLevel: ''
    })
    // console.log('API Endpoint:', config.API_BASE_URL);
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: '',
    })
    const handleLogin = () => {console.log(loginformData);
        // console.log("error")


        fetch(`${config.API_BASE_URL}/auth/login`, {
            // ${config.API_BASE_URL}/auth/login
            // import.meta.env.VITE_BACKEND_API
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginformData),
            credentials: 'include'
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.ok) {
                    toast.success(data.message)

                    setShowpopup(false)
                }
                else {
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })}
    const handleSignup = () => {fetch(`${config.API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupformData),
        credentials: 'include'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (data.ok) {
                toast.success(data.message)

                setshowsignup(false)
            }
            else {
                toast.error(data.message)
            }
        }).catch(err => {
            console.log(err)
        })}
        // console.log(console.log("API Endpoint:", process.env.REACT_APP_BACKEND_API)
        // )
  return (
    <div className="popup">
        <button className='close' onClick={() => {setShowpopup(false)}}>
                <AiOutlineClose />
        </button>
        {
            showsignup ? (
                <div className="authform">
                    <div className="left">
                        <img src = {logo} alt = "Logo"/>
                    </div>
                    <div className="right">
                        <h1>Signup to become a freak</h1>
                        <form action="">
                        <Input
                                    color="warning"
                                    placeholder="name"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            name: e.target.value
                                        })
                                    }}
                                />
                        <Input placeholder="email" size="lg" variant="solid" color="warning" onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            email: e.target.value
                                        })
                                    }}/>
                        <Input placeholder="password" size="lg" variant="solid" color="warning" type="password" onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            password: e.target.value
                                        })
                                    }}/>
                                    
                                    <Input color="warning" size="lg" variant="solid" type="number" placeholder='Weight in kg'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            weightInKg: parseFloat(e.target.value)
                                        })
                                    }}
                                />
                        <Select
                                    color="warning"
                                    placeholder="Activity Level"
                                    size="lg"
                                    variant="solid"

                                    onChange={(
                                        event,
                                        newValue
                                    ) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            activityLevel: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="sedentary">Sedentary</Option>
                                    <Option value="light">Light</Option>
                                    <Option value="moderate">Moderate</Option>
                                    <Option value="active">Active</Option>
                                    <Option value="veryActive">Very Active</Option>
                                </Select>

                                <Select
                                    color="warning"
                                    placeholder="Goal"
                                    size="lg"
                                    variant="solid"

                                    onChange={(
                                        event,
                                        newValue
                                    ) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            goal: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="weightLoss">Lose</Option>
                                    <Option value="weightMaintain">Maintain</Option>
                                    <Option value="weightGain">Gain</Option>
                                </Select>
                        {/* <div className="form_input_leftright">
                            <Input placeholder="Age" size="lg" variant="solid" type="number" color="warning" />
                            <Input placeholder="Weight" size="lg" variant="solid" type="number" color="warning" />
                        </div> */}

                        <Select
                            color="warning"
                            placeholder="Gender"
                            size="lg"
                            variant="solid"
                            onChange={(
                                event,
                                newValue
                            ) => {
                                setSignupFormData({
                                    ...signupformData,
                                    gender: newValue?.toString() || ''
                                })
                            }}
                        >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>

                        {/* <br /> */}

                        <label htmlFor="">Height</label>
                        {/* <div className="form_input_leftright">
                            <Input placeholder="ft" size="lg" variant="solid" type="number" color="warning" />
                            <Input placeholder="in" size="lg" variant="solid" type="number" color="warning" />
                        </div> */}
                        <Input color="warning" size="lg" variant="solid" type="number" placeholder='cm'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            heightInCm: parseFloat(e.target.value)
                                        })
                                    }}
                                />


                                <label htmlFor="">Date of Birth</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}

                                >
                                    <DesktopDatePicker defaultValue={dayjs(new Date())}
                                        sx={{
                                            backgroundColor: 'white',
                                        }}

                                        onChange={(newValue) => {
                                            setSignupFormData({
                                                ...signupformData,
                                                dob: new Date(newValue)
                                            })
                                        }}
                                    />
                                </LocalizationProvider>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSignup()
                                    }}
                                >Signup</button>
                        </form>
                        <p>Already have an account?<button onClick={ () => {
                            setshowsignup(false)
                        }}>Login</button>
                        </p>
                    </div>
            
                </div>
            ) : 
            (
                <div className="authform">
                    <div className="left">
                        <img src = {logo} alt = "Logo"/>
                    </div>
                    <div className="right">
                        <h1>Login to become a freak</h1>
                        <form action="">

                        {/* <Input placeholder="email" size="lg" variant="solid" color="warning" />
                        <Input placeholder="password" size="lg" variant="solid" color="warning" type="password" />

                        <button onClick={() => {
                            handleLogin()
                        }}
                        >Login</button>
                        </form> */}
                        <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            email: e.target.value
                                        })
                                    }}
                                />

                                <Input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            password: e.target.value
                                        })
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLogin()
                                    }}
                                >Login</button>
                            </form>
                        <p>Don't have an account?<button onClick={ () => {
                            setshowsignup(true)
                        }}>Signup</button>
                        </p>
                    </div>
            
                </div>
            )
            // (
            //     <div className='authform'>
            //         <div className='left'>
            //             <image src={logo} alt="Logo" />
            //         </div>
            //         <div className='right'>
            //             <h1>Login to become a freak</h1>
            //             <form action="">
            //                 <Input
            //                     color="warning"
            //                     placeholder="email"
            //                     size="lg"
            //                     variant="solid"
            //                     onChange={(e) => {
            //                         setLoginFormData({
            //                             ...loginformData,
            //                             email: e.target.value
            //                         })
            //                     }}
            //                 />

            //                 <Input
            //                     color="warning"
            //                     placeholder="password"
            //                     size="lg"
            //                     variant="solid"
            //                     type='password'

            //                     onChange={(e) => {
            //                         setLoginFormData({
            //                             ...loginformData,
            //                             password: e.target.value
            //                         })
            //                     }}
            //                 />
            //                 <button
            //                     onClick={(e) => {
            //                         e.preventDefault()
            //                         handleLogin()
            //                     }}
            //                 >Login</button>
            //             </form>
            //             <p>Don't have an account?  <button onClick={() => {
            //                 setShowSignup(true)
            //             }}>Signup</button></p>
            //         </div>

            //     </div>
            // )
        }
    </div>
  )
}

export default Authopopup