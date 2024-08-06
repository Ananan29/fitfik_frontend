// import React, { useState } from 'react'
// import "./Page.css"
// import { useParams } from 'react-router-dom';
// const Page = () => {
//     const [workout,setworkout]=useState()
//     const { type } = useParams();
//     const getworkout = async () => {
//         let data = {
//             type: 'Chest',
//             imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//             durationInMin: 30,
//             exercises: [
//                 {
//                     exercise: 'Flat Bench Press',
//                     videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//                     sets: 3,
//                     reps: 10,
//                     rest: 60,
//                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//                 },
//                 {
//                     exercise: 'Incline Bench Press',
//                     videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//                     sets: 3,
//                     reps: 10,
//                     rest: 60,
//                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

//                 },
//                 {
//                     exercise: 'Decline Bench Press',
//                     videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//                     sets: 3,
//                     reps: 10,
//                     rest: 60,
//                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

//                 }
//             ]
//         }

//         setworkout(data)
//     }

//     React.useEffect(() => {
//         getworkout()
//     }, [])
//   return (
//     <div className='workout'>
//         <h1 className='mainhead1'>{type+" "} 
//         {/* {workout?.type}  */}
//         Day</h1>
//             <div className='workout__exercises'>
//                 {
//                     workout?.exercises.map((item, index)=>{
//                         return (
//                             <div className={
//                                 index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
//                             }>
//                                 <h3 className='mainheadindex'>{index+1}</h3>
//                                 <div className='workout__exercise__image'>
//                                     <img src={item.videoUrl} alt="" />
//                                 </div>
//                                 <div className='workout__exercise__content'>
//                                     <h2>{item.exercise}</h2>
//                                     <span>{item.sets} sets X {item.reps} reps</span>
//                                     <p>{item.description}</p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//     </div>
//   )
// }

// export default Page

import React, { useState } from 'react'
import "./Page.css"
import { useParams } from 'react-router-dom';
const Page = () => {
    const [workout,setworkout]=useState()
    const { type } = useParams();
    const getworkout = async () => {
        let data = {
            type: 'Chest',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Flat Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                },
                {
                    exercise: 'Incline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                },
                {
                    exercise: 'Decline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                }
            ]
        }

        setworkout(data)
    }

    React.useEffect(() => {
        getworkout()
    }, [])
  return (
    <div className='workout'>
        <h1 className='mainhead1'>{type+" "} 
        {/* {workout?.type}  */}
        Day</h1>
            <div className='workout__exercises'>
                {
                    workout?.exercises.map((item, index)=>{
                        return (
                            <div className={
                                index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
                            }>
                                <h3 className='mainheadindex'>{index+1}</h3>
                                <div className='workout__exercise__image'>
                                    <img src={item.videoUrl} alt="" />
                                </div>
                                <div className='workout__exercise__content'>
                                    <h2>{item.exercise}</h2>
                                    <span>{item.sets} sets X {item.reps} reps</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Page