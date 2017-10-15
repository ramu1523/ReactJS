import FaFemale from 'react-icons/lib/fa/female'
import FaMale from 'react-icons/lib/fa/male'
import {EmployeeRow} from './EmployeeRow'
import {PropTypes} from 'react'

export const EmployeeList = ({employees})=>
(
  <table>
     <thead>
     <tr>
          <th> Employee ID </th>
          <th> Name</th>
          <th> Monthly Salary</th>
          <th> Employee Join Date</th>
          <th> Address</th>
          <th> Gender</th>
          </tr>
     </thead>
     <tbody>
        {employees.map((employee,i)=> <EmployeeRow key={i}
                                        employeeId={employee.employeeId}
                                        employeeName={employee.employeeName}
                                        employeeYearlyWage={(employee.employeeYearlyWage)}
                                        employeeJoinDate={employee.employeeJoinDate}
                                        employeeAddress={employee.employeeAddress}
                                        gender={employee.gender}/>)}
     </tbody>
  </table>
)

/**EmployeeList.propTypes =
{
  employees : PropTypes.array
}*/
//Custom validation
EmployeeList.propTypes =
{
  employees : function(props)
  {
    if(!Array.isArray(props.employees))
    {
      return new Error("EmployeeList should be an Array")
    }else if(!props.employees.length){

        return new Error("EmployeeList should should have atleast one record")

    }
    else {
      return null
    }
  }
}
