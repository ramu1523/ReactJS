import FaFemale from 'react-icons/lib/fa/female'
import FaMale from 'react-icons/lib/fa/male'
import FaDollar from 'react-icons/lib/fa/dollar'
import {PropTypes} from 'react'


export const EmployeeRow = ({employeeId,employeeName,employeeYearlyWage,employeeJoinDate,employeeAddress,gender}) =>
(
  <tr>
      <td>{employeeId}</td>
      <td>{employeeName}</td>
     <td>{<FaDollar/>}{employeeYearlyWage/12}</td>
      <td>{employeeJoinDate}</td>
     <td>{employeeAddress}</td>
    <td>{(gender=='Male')? <FaMale/> : <FaFemale/>}</td>
  </tr>
)

EmployeeRow.propTypes={
  employeeId : PropTypes.number.isRequired,
  employeeName: PropTypes.string,
  employeeJoinDate: PropTypes.string.isRequired

}
