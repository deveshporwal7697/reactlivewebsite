import React from 'react'


import Card from "./Card"
import Data from "../Data"
const Courses = () => {
    return (
   
         <>
         <div className="my-5">
 <h1 className="text-center">Our Courses</h1>
 </div>
 <div className="containe-fluid mb-5">
 <div className="row">
 <div className="col-10 mx-auto">
 <div className="row gy-4">
 
 {
Data.map((val,ind)=>{
    return <Card
    key={ind}
    imgsrcc={val.imgsrcc}
    title={val.title}
    text={val.text}

    />
})

 }
     </div>
 </div>
 </div>
 </div>
      </>
    )
}

export default Courses
