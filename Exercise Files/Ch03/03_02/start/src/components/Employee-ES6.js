import { Component, ProtoTypes} from 'react'
import '../stylesheets/ui.scss'

export class Employee  extends Component
{

  calculateMontlyWage(yearlyWage)
  {
    return (yearlyWage/12)
  }
  propTypes:
  {
    employeeId: ProtoTypes.number.isRequired,
    employeeWage: ProtoTypes.number
  }
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

Employee.defaultProps=
{
  employeeId: 20000,
  employeeName: 'Susan',
  employeeSalary: 100000
}
