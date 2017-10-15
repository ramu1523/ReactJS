import '../stylesheets/ui.scss'
import FaBitcoin from 'react-icons/lib/fa/bitcoin'
const employeeMonthlyWage = (yearlyWage) =>
{
  return ('$' + (yearlyWage/12))
}
export const Employee = (props) =>
  (
        <div className="employee">
         <div className="employeeNumber">
          <span> Employee Number: {props.employeeId}</span>
         </div>
         <div className="employeeName">
           <span>Employee Name: {props.employeeName} </span>
         </div>
         <div className="employeeAddress">
         <span> Employee Address: {props.employeeAddress}</span>
         </div>
         <div className="employeeMonthlyWage">
         <span>Employee Monthly Wage: {employeeMonthlyWage(props.employeeYearlyWage)} </span>
         </div>
         <div>
         <FaBitcoin/>
         </div>
        </div>
      )
