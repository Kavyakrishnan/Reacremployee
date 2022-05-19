import React, { useState } from 'react'
import Header from './Header'

const Addemp = () => {
    var[empname,setEname]=useState("")
    var[empid,setEid]=useState("")
    var[empdesg,setEdesg]=useState("")
    var[empcname,setEcname]=useState("")
    var[empdob,setEdob]=useState("")
    var[empmail,setEmail]=useState("")
    const subData=()=>{
        const data={"empname":empname,"empid":empid,"empdesg":empdesg,"empcname":empcname,"empdob":empdob,"empemail":empmail}
        console.log(data)
    }
    const clearData=()=>{
        const data={"empname":"","empid":"","empdesg":"","empcname":"","empdob":"","empemail":""}
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
                    <input onChange={(e)=>setEname(e.target.value)} type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">EmployeeName</label>
                    <input onChange={(e)=>setEid(e.target.value)} type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Designation</label>
                    <input  onChange={(e)=>setEdesg(e.target.value)}  type="text" class="form-control"/>
                </div>
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Companyname</label>
                    <input  onChange={(e)=>setEcname(e.target.value)}  type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">DOB</label>
                    <input  onChange={(e)=>setEdob(e.target.value)}  type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Email</label>
                    <input  onChange={(e)=>setEmail(e.target.value)}  type="text" class="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={clearData}  class="btn btn-danger">Clear</button>     
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button  onClick={subData}  class="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addemp