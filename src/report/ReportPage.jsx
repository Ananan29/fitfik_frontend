// // import React, {useEffect, useState} from 'react'
// // import { LineChart } from '@mui/x-charts/LineChart' 
// // import './ReportPage.css'
// // // import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
// // import{ AiFillEdit } from 'react-icons/ai'
// // //import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
// // import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import config from "./../config"
// // const ReportPage = () => {
// //     const color = '#ffc20e';
    // const location = useLocation();
    // const pathname = location.pathname;
    // console.log(pathname)
// //     const chartsParams = {
// //         // margin: {bottom: 20, left: 25, right: 5 },
// //         height: 300,
// //         // height:300,
// //         margin:{ left: 30, right: 30, top: 30, bottom: 50 },
// //         // grid:{ vertical: true, horizontal: true }
// //     }
// //     const [dataS1,setDataS1]=useState(
// //         // null
// //         [])
// //     const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false)
// //     const getDataForS1 = async () => {
// //         if (pathname == '/report/Calorie%20Intake') {
// //             fetch(config.API_BASE_URL + '/calorieintake getcalorieintakebylimit',{
// //                 method: 'POST',
// //                 credentials: 'include', 
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //             body: JSON.stringify({ limit: 10 })
// //             })
// //             .then(res => res-json())
// //             .then(data => {
// //                 if (data.ok && data.data.length > 0){
// //                     let temp = data.data.map((item) => {
// //                         return {
// //                             date: item.date, 
// //                             value: item.calorientake, 
// //                             unit: 'kcal'
// //                         }
// //                     })
// //                     let dataForLineChart = temp.map((item) => {
// //                         let val = JSON. stringify(item.value)
// //                         return val
// //                     })
                    
// //                     let dataForXAxis = temp.map((item) => {
// //                         let val = new Date(item.date)
// //                         return val
// //                     }) 

// //                     setDataS1({
// //                         data: dataForLineChart,
// //                         title: '1 Day Calorie Intake',
// //                         color: color,
// //                         xAxis: {
// //                             data: dataForXAxis,
// //                             label: 'Last 10 Days', 
// //                             scaleType: 'time'
// //                         }
// //                     })
// //                 }
                    
// //                 else{
// //                     setDataS1([])
// //                 }
// //             } )
// //             .catch(err => {
// //                 console. log(err)
// //             })
// //         }        
// //         else {
// //             // get data for other reports
// //             alert('get data for other reports')
// //         }
        
// //         // let temp = [
// //         //     {
// //         //         date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2000,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2500,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2700,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 3000,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2000,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2300,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2500,
// //         //         unit: 'kcal'
// //         //     },
// //         //     {
// //         //         date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
// //         //         value: 2700,
// //         //         unit: 'kcal'
// //         //     },
// //         // ]
// //         // let dataForLineChart = temp.map((item) => {
// //         //     let val = JSON.stringify(item.value);
// //         //     return val;
// //         // })
        
// //         // let dataForXAxis = temp.map((item) => {
// //         //     let val = new Date(item.date);
// //         //     return val;
// //         // })

// //         // console.log({
// //         //     data: dataForLineChart,
// //         //     title: '1 Day Calorie Intake',
// //         //     color: color,
// //         //     xAxis: {
// //         //       data: dataForXAxis,
// //         //       label: 'Last 10 Days',
// //         //       scaleType: 'time',
// //         //     }
// //         //   })

// //         // setDataS1({
// //         //     data: dataForLineChart,
// //         //     title: '1 Day Calorie Intake',
// //         //     color: color,
// //         //     xAxis: {
// //         //         data: dataForXAxis,
// //         //         label: 'Last 10 Days',
// //         //         scaleType: 'time'
// //         //     }
// //         // })
        

// //     }
// //     useEffect(() => {
// //         getDataForS1()
// //     }, [])

// //     console.log(dataS1 &&1)

// //   return (
// //     <div className='reportpage'>
// //         <div className='s1'>
// //         {dataS1.length > 0 &&(
// //         dataS1 &&<LineChart
// //             xAxis={[{
// //                 id: 'Day',
// //                 data: dataS1.xAxis.data,
// //                 scaleType: dataS1.xAxis.scaleType,
// //                 label: dataS1.xAxis.label,
// //                 // valueFormatter: (date) => {
// //                 //     return new Date(date).getDate();
// //                 // }
// //             }]}
// //             series={[
// //                 {
// //                     data: dataS1.data,
// //                     label: dataS1.title,
// //                     color: dataS1.color,
// //                 },
// //             ]}
// //             {...chartsParams}
// //             // height={300}
// //             // margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
// //             // margin={{ left: 25, right: 5, top: 30, bottom: 20 }}
// //         />
// //         )}
// //         </div>
// //         {/* <div className='s2'>
// //                 {
// //                     dataS1 &&
// //                     <LineChart
// //                         xAxis={[{
// //                             id: 'Day',
// //                             data: dataS1.xAxis.data,
// //                             scaleType: dataS1.xAxis.scaleType,
// //                             label: dataS1.xAxis.label,
// //                             // valueFormatter: (date: any) => {
// //                             //     return date.getDate();
// //                             // }
// //                         }]}
// //                         series={[
// //                             {
// //                                 data: dataS1.data,
// //                                 label: dataS1.title,
// //                                 color: dataS1.color,
// //                             },
// //                         ]}
// //                         {...chartsParams}
// //                     />
// //                 }
// //             </div>

// //             <div className='s3'>
// //                 {
// //                     dataS1 &&
// //                     <LineChart
// //                         xAxis={[{
// //                             id: 'Day',
// //                             data: dataS1.xAxis.data,
// //                             scaleType: dataS1.xAxis.scaleType,
// //                             label: dataS1.xAxis.label,
// //                             // valueFormatter: (date: any) => {
// //                             //     return date.getDate();
// //                             // }
// //                         }]}
// //                         series={[
// //                             {
// //                                 data: dataS1.data,
// //                                 label: dataS1.title,
// //                                 color: dataS1.color,
// //                             },
// //                         ]}
// //                         {...chartsParams}
// //                     />
// //                 }
// //             </div>

// //             <div className='s4'>
// //                 {
// //                     dataS1 &&
// //                     <LineChart
// //                         xAxis={[{
// //                             id: 'Day',
// //                             data: dataS1.xAxis.data,
// //                             scaleType: dataS1.xAxis.scaleType,
// //                             label: dataS1.xAxis.label,
// //                             // valueFormatter: (date: any) => {
// //                             //     return date.getDate();
// //                             // }
// //                         }]}
// //                         series={[
// //                             {
// //                                 data: dataS1.data,
// //                                 label: dataS1.title,
// //                                 color: dataS1.color,
// //                             },
// //                         ]}
// //                         {...chartsParams}
// //                     />
// //                 }
// //             </div> */}
// //             <button className='editbutton'
// //                 onClick={() => {
// //                     console.log("Current pathname:", pathname);
// //                     if (pathname == '/report/Calories%20Intake'){
// //                         console.log("vo")
// //                         setShowCalorieIntakePopup(true)
// //                         console.log("v")
// //                     }
// //                     else{
// //                         //show popup for other reports
// //                         alert('show popup for other reports')
// //                     }
// //                 }}
// //             >
// //                 <AiFillEdit />
// //             </button>

// //             {
// //                 showCalorieIntakePopup 
// //                 &&

// //                 <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />
                
// //             }
         
// //     </div>
// // )
// // }

// // export default ReportPage
// import React, { useEffect, useState } from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import './ReportPage.css';
// import { AiFillEdit } from 'react-icons/ai';
// import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
// import { useLocation } from 'react-router-dom';
// import config from "./../config";

// const ReportPage = () => {
//     const color = '#ffc20e';
//     const location = useLocation();
//     const pathname = location.pathname;
//     console.log("Pathname:", pathname); // Debug log for pathname
//     const chartsParams = {
//         height: 300,
//         margin: { left: 30, right: 30, top: 30, bottom: 50 }
//     };
//     const [dataS1, setDataS1] = useState([]);
//     const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false);

//     const getDataForS1 = async () => {
//         const decodedPathname = decodeURIComponent(pathname);
//         console.log("Decoded Pathname:", decodedPathname);
//         // if (pathname === '/report/Calories%20Intake') {
//             if (decodedPathname === '/report/Calories Intake') {
//                 console.log("Condition met for Calories Intake");
//             fetch(config.API_BASE_URL + '/calorieintake/getcalorieintakebylimit', {
//                 method: 'POST',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ limit: 10 })
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.ok && data.data.length > 0) {
//                     let temp = data.data.map((item) => {
//                         return {
//                             date: item.date,
//                             value: item.calorieintake,
//                             unit: 'kcal'
//                         };
//                     });

//                     let dataForLineChart = temp.map((item) => item.value);
//                     let dataForXAxis = temp.map((item) => new Date(item.date));

//                     setDataS1({
//                         data: dataForLineChart,
//                         title: '1 Day Calorie Intake',
//                         color: color,
//                         xAxis: {
//                             data: dataForXAxis,
//                             label: 'Last 10 Days',
//                             scaleType: 'time'
//                         }
//                     });
//                 } else {
//                     setDataS1([]);
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//         } else {
//             alert('get data for other reports');
//         }
//     };

//     // useEffect(() => {
//     //     getDataForS1();
//     // }, []);

//     useEffect(() => {
//         console.log("showCalorieIntakePopup state changed:", showCalorieIntakePopup);
//     }, [showCalorieIntakePopup]);
    

//     console.log(dataS1 && 1);

//     return (
//         <div className='reportpage'>
//             <div className='s1'>
//                 {dataS1.length > 0 && (
//                     <LineChart
//                         xAxis={[{
//                             id: 'Day',
//                             data: dataS1.xAxis.data,
//                             scaleType: dataS1.xAxis.scaleType,
//                             label: dataS1.xAxis.label,
//                         }]}
//                         series={[
//                             {
//                                 data: dataS1.data,
//                                 label: dataS1.title,
//                                 color: dataS1.color,
//                             },
//                         ]}
//                         {...chartsParams}
//                     />
//                 )}
//             </div>
//             {/* <button className='editbutton'
//                 onClick={() => {
//                     console.log("Current pathname:", pathname); // Debug log for current pathname
//                     if (pathname === '/report/Calories%20Intake') {
//                         console.log("Setting showCalorieIntakePopup to true"); // Debug log for popup visibility
//                         setShowCalorieIntakePopup(true);
//                     } else {
//                         alert('show popup for other reports');
//                     }
//                 }}
//             > */}
//             <button className='editbutton'
//             onClick={() => {
//                 console.log("Current pathname:", pathname); // Debug log for current pathname
//                 setShowCalorieIntakePopup(true); // Directly set the state to true for testing
//             }}
// >
//                 <AiFillEdit />
//             </button>

//             {/* {showCalorieIntakePopup && <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />} */}
//             {showCalorieIntakePopup && <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />}

//         </div>
//     );
// };

// export default ReportPage;

import React, {useEffect, useState} from 'react'
import { LineChart } from '@mui/x-charts/LineChart' 
import './ReportPage.css'
// import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
import{ AiFillEdit } from 'react-icons/ai'
//import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'

const ReportPage = () => {
    const color = '#ffc20e';
    const location = useLocation();
    const pathname = location.pathname;
    // // const pathname = '/report/Calories%20Intake';
    // const x = window.location.pathname;
    // console.log(location.x);
    // const pathname = location.x;
    
    // console.log(pathname)
    // const decodedPathname = decodeURIComponent(pathname);
    // console.log("Decoded Pathname:", decodedPathname);

//   // Get the pathname from the location object
// //   const pathname = location.pathname;
  
//   // Get the pathname from the window object
//   const windowPathname = window.location.pathname;

//   console.log("React Router Location Pathname:", pathname);
//   console.log("Window Location Pathname:", windowPathname);

//   // Decoding the pathname if it contains encoded characters
//   const decodedPathname = decodeURIComponent(pathname);
//   console.log("Decoded Pathname:", decodedPathname);
    const chartsParams = {
        // margin: {bottom: 20, left: 25, right: 5 },
        height: 300,
        // height:300,
        margin:{ left: 30, right: 30, top: 30, bottom: 50 },
        // grid:{ vertical: true, horizontal: true }
    }
//     useEffect(() => {
//         // Print the pathname to the console
//         console.log("Raw Pathname:", pathname);
    
//         // Decode the pathname
//         const decodedPathname = decodeURIComponent(pathname);
//         console.log("Decoded Pathname:", decodedPathname);
    
//         // Regular expression to validate pathname format (e.g., alphanumeric and specific characters)
//         const pathnameRegex = /^\/[a-zA-Z0-9%\-_/]*$/;
//         const isValid = pathnameRegex.test(pathname);
//         console.log("Is Pathname Valid?", isValid);
        
//         // Optional: Check if decoding changed the pathname (indicating it had encoded characters)
//         if (pathname !== decodedPathname) {
//           console.log("The pathname had encoded characters that were decoded.");
//         } else {
//           console.log("The pathname did not have encoded characters.");
//         }
//       }, [pathname]);
    const [dataS1,setDataS1]=useState(null)
    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false)
    const getDataForS1 = async () => {
        // let temp = [
        //     {
        //         date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 3000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2300,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        // ]
        // let dataForLineChart = temp.map((item) => {
        //     let val = JSON.stringify(item.value);
        //     return val;
        // })
        
        // let dataForXAxis = temp.map((item) => {
        //     let val = new Date(item.date);
        //     return val;
        // })

        // console.log({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //       data: dataForXAxis,
        //       label: 'Last 10 Days',
        //       scaleType: 'time',
        //     }
        //   })

        // setDataS1({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //         data: dataForXAxis,
        //         label: 'Last 10 Days',
        //         scaleType: 'time'
        //     }
        // })

        // const decodedPathname = decodeURIComponent(pathname);
        // console.log("Pathname:", pathname);
        if (pathname == '/report/Calorie%20Intake') {
    //         // if (decodedPathname === '/report/Calories Intake') {
                console.log("Condition met for Calories Intake");
            fetch(config.API_BASE_URL + '/calorieintake/getcalorieintakebylimit', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ limit: 10 })
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data,"gg")
                if (data.ok&&data.data.length>0) {
                    // console.log(data.ok)
                    let temp = data.data.map((item) => {
                        // console.log("g")
                        // console.log(item)
                        return {
                            date: item.date,
                            value: item.calorieIntake,
                            unit: 'kcal'
                        };
                    });
                    // console.log("data",data.data)
                    // let dataForLineChart = temp.map((item) => item.value);
                    // let dataForXAxis = temp.map((item) => new Date(item.date));

                    let dataForLineChart=temp.map((item)=>{
                        // console.log("one",item)
                            let val=JSON.stringify(item.value);
                            return val;
                        })
                        // console.log("one",dataForLineChart)
                        let dataForXAxis=temp.map((item)=>{
                            // console.log("two",item)
                            let val=new Date(item.date);
                            return val;
                        })
                        // console.log("two",dataForXAxis)
                        // console.log("###############",dataForLineChart,
                        // '1 Day Calorie Intake',
                        // color,
                        // {
                        //     data: dataForXAxis,
                        //     label: 'Last 10 Days',
                        //     scaleType: 'time'
                        // })
                    setDataS1({
                        data: dataForLineChart,
                        title: '1 Day Calorie Intake',
                        color: color,
                        xAxis: {
                            data: dataForXAxis,
                            label: 'Last 10 Days',
                            scaleType: 'time'
                        }
                    });
                } 
                else {
                    console.log("error")
                    setDataS1([]);
                }
            })
            .catch(err => {
                console.log(err);
            });
        // } 
    }
        else {
            alert('get data for other reports');
        }
    // }else{
    //     alert('error')
    // }
        

    }
    // let dataForLineChart=temp.map((item)=>{
    //     let val=JSON.stringify(item.value);
    //     return val;
    // })
    // let dataForXAxis=temp.map((item)=>{
    //     let val=new Date(item.date);
    //     return val;
    // })
    // setDataS1({
    //                             data: dataForLineChart,
    //                             title: '1 Day Calorie Intake',
    //                             color: color,
    //                             xAxis: {
    //                                 data: dataForXAxis,
    //                                 label: 'Last 10 Days',
    //                                 scaleType: 'time'
    //                             }
    //                         });
    useEffect(() => {
        getDataForS1()
    }, [])
    useEffect(()=>{
        console.log("-------",dataS1
        // ,dataS1?.length
        ,dataS1?.data?.length);
    },[dataS1])
    const reloadsavefunc=()=>{
        console.log("reloadsavefunc")
        window.location.reload(false);
    }
    // console.log("dfghjfghjk")
    // console.log("dataaaaa",dataS1)

  return (
    <div className='reportpage'>
        {/* <p>gjhnfvng{dataS1.data?.length}</p> */}
        {
            dataS1?.data?.length>0
            // &&dataS1.data?.length>0
            && 
            // <p>chgvjgyftfcg</p>
            <div className='s1'>
               {/* <p>{dataS1&&1}</p> */}
        {dataS1 &&
        <p>vghvghhgnhjghcfbv
            data: {dataS1.xAxis.data},
                scaleType: {dataS1.xAxis.scaleType},
                label: {dataS1.xAxis.label},
        </p>&&
        (
        <LineChart
            xAxis={[{
                id: 'Day',
                data: dataS1.xAxis.data,
                scaleType: dataS1.xAxis.scaleType,
                label: dataS1.xAxis.label,
                // valueFormatter: (date) => {
                //     return new Date(date).getDate();
                // }
            }]}
            series={[
                {
                    data: dataS1.data,
                    label: dataS1.title,
                    color: dataS1.color,
                },
            ]}
            {...chartsParams}
            // height={300}
            // margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            // margin={{ left: 25, right: 5, top: 30, bottom: 20 }}
        />
        )}
        </div>
        } 
        {/* <div className='s2'>
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            label: dataS1.xAxis.label,
                            // valueFormatter: (date: any) => {
                            //     return date.getDate();
                            // }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />
                }
            </div>

            <div className='s3'>
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            label: dataS1.xAxis.label,
                            // valueFormatter: (date: any) => {
                            //     return date.getDate();
                            // }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />
                }
            </div>

            <div className='s4'>
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            label: dataS1.xAxis.label,
                            // valueFormatter: (date: any) => {
                            //     return date.getDate();
                            // }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />
                }
            </div> */}
            <button className='editbutton'
                onClick={() => {
                    if(pathname=="/report/Calorie%20Intake"){
                        setShowCalorieIntakePopup(true)
                    }
                    else{
                        alert("show popup for other reports")
                    }
                }}
            >
                <AiFillEdit />
            </button>

            {
                showCalorieIntakePopup 
                &&

                <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} reloadfunc={reloadsavefunc} />

            }
         
    </div>
)
}

export default ReportPage