import React, { useState } from 'react'
import Header from './Header'

const Searchemp = () => {
    var[empid,setEid]=useState("")
    const subData=()=>{
        const data={"empid":empid}
        console.log(data)
    }
  return (
    <div>
               
        <Header/>
        <div className="container">
    <div className="row g-2">
        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employeeid</label>
                    <input onChange={(e)=>setEid(e.target.value)} type="text" class="form-control"/>
                </div>
                
                
                
                
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subData} class="btn btn-primary">Search</button>     
                </div>
                
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Searchemp