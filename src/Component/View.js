import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import Header from './Header'

const View = () => {
    var Employee=[
        {
            "empid":"1",
            "empname":"Ajith",
            "desg":"Accountant",
            "compname":"Orion",
            "DOB":"1998",
            "email":"www.Ajith.com",
        },
        {
            "empid":"2",
            "empname":"Anitha",
            "desg":"HR",
            "compname":"Accenture",
            "DOB":"1998",
            "email":"www.Anitha.com",
        },
        {
            "empid":"3",
            "empname":"Ammu",
            "desg":"Designer",
            "compname":"TCS",
            "DOB":"1998",
            "email":"www.Ammu.com",
        },
        {
            "empid":"4",
            "empname":"Akhil",
            "desg":"Testing",
            "compname":"Infosys",
            "DOB":"1998",
            "email":"www.Akhil.com",
        },
    
        {
            "empid":"5",
            "empname":"Arun",
            "desg":"Software",
            "compname":"IBM",
            "DOB":"1998",
            "email":"www.Arun.com",
        },
    
    
    
    ]
  return (
    <div>
        
    <Header/> 
 <div className="container">
 <div className="row">
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
  <div className="row g-3">
  <div className='col col-12 col-sm-12 col-md-12 col-lg-12'>
  <table class="table table-success">
                     <thead>
                         <tr>
                             <th scope="col">NO</th>
                             <th scope="col">Empid</th>
                             <th scope="col">Empname</th>
                             <th scope="col">Desg</th>
                             <th scope="col">Companyname</th>
                             <th scope="col">DOB</th>
                             <th scope="col">Email</th>
                         </tr>
                     </thead> 
  <tbody>   
  {Employee.map((value,key)=>{
             return <tr>      
    <th scope="row">1</th>
    <td>{value.empid}</td>
    <td>{value.empname}</td>
    <td>{value.desg}</td>
    <td>{value.compname}</td>
    <td>{value.DOB}</td>
   <td>{value.email}</td>    
    </tr>


         } )}
           </tbody>
</table>
         </div>    
           </div>
           </div>
           </div>
           </div>
           </div>
   

  )
}

export default View