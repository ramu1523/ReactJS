import FaFemale from 'react-icons/lib/fa/female'
import FaMale from 'react-icons/lib/fa/male'
import {EmployeeRow} from './EmployeeRow'

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
