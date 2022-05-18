import React from 'react'
import Header from './Header'

const Addemp = () => {
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row g-2">
        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employeeid</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">EmployeeName</label>
                    <input type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Designation</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Companynamen</label>
                    <input type="text" class="form-control"/> 
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">DOB</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Email</label>
                    <input type="text" class="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button class="btn btn-danger">Clear</button>     
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button class="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addemp