import FaFemale from 'react-icons/lib/fa/female'
import FaMale from 'react-icons/lib/fa/male'
import FaDollar from 'react-icons/lib/fa/dollar'



export const EmployeeRow = ({employeeId,employeeName,employeeYearlyWage,employeeJoinDate,employeeAddress,gender}) =>
(
  <tr>
      <td>{employeeId}</td>
      <td>{employeeName}</td>
     <td>{<FaDollar/>}{employeeYearlyWage/12}</td>
          <td>{employeeJoinDate.getMonth()+1}/{employeeJoinDate.getDate()}/{employeeJoinDate.getFullYear()}</td>
     <td>{employeeAddress}</td>
    <td>{(gender=='Male')? <FaMale/> : <FaFemale/>}</td>
  </tr>
)