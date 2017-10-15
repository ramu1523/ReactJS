import React from 'react'
import '../stylesheets/ui.scss'

export class Employee extends React.Component
  {
    employeeMonthlyWage(yearlyWage)
    {
      return '$' + (yearlyWage/12)
    }
    render()
    {
      return(
        <div className="employee">
         <div className="employeeNumber">
          <span> Employee Number: {this.props.employeeId}</span>
         </div>
         <div className="employeeName">
           <span>Employee Name: {this.props.employeeName} </span>
         </div>
         <div className="employeeAddress">
         <span> Employee Address: {this.props.employeeAddress}</span>
         </div>
         <div className="employeeMonthlyWage">
         <span>Employee Monthly Wage: {this.employeeMonthlyWage(this.props.employeeYearlyWage)} </span>
         </div>
        </div>
      )
    }
  }
