import React from 'react'
import '../stylesheets/ui.scss'

export const Employee = React.createClass(
  {
    render()
    {
      return(
        <div className="employee">
         <div className="employeeNumber">
          <span> Employee Number: 1234567</span>
         </div>
         <div className="employeeName">
           <span>Employee Name: Ramu Chinni</span>
         </div>
         <div className="employeeAddress">
         <span> Employee Address: Eagan, MN, 55123</span>
         </div>
        </div>
      )
    }
  }
)
