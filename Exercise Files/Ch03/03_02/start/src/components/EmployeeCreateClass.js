import { createClass,PropTypes} from 'react'
import '../stylesheets/ui.scss'

export const Employee = createClass(
  {

    propTypes:
    {
       employeeId: PropTypes.number,
       employeeSalary: PropTypes.number
    },
    getDefaultProps()
    {
      return{
      employeeId: 20000,
      employeeName:'Susan',
      employeeSalary: 100000
    }
    },
    calculateMontlyWage(yearlyWage)
    {
      return (yearlyWage/12)
    },
    render()
    {
      return(
        <div className="employee">
        <div> Employee Number: {this.props.employeeId} </div>
        <div> Employee Name: {this.props.employeeName} </div>
        <div> Employee Salary: {this.calculateMontlyWage(this.props.employeeSalary)} </div>
        </div>

      )
    }
  }
)
