import {createClass} from 'react'
import {EmployeeList} from './EmployeeList'
import {AddEmployeeForm} from './AddEmployeeForm'
import {Whoops404} from './Whoops404'
export const App = createClass(
  {
    getInitialState()
    {
      return {
        employees: [
    			{
    				employeeId: 10001,
    				employeeName: "Ramu Chinni",
    				employeeYearlyWage: 60000,
    				employeeAddress: "Eagan,MN, 553445",
    				employeeJoinDate: new Date("1/10/2014"),
    				gender: 'Male'
    			},
    			{
    				employeeId: 10002,
    				employeeName: "Latha  B",
    				employeeYearlyWage: 84000,
    				employeeAddress: "Eagan,MN, 553445",
    				employeeJoinDate: new Date("3/28/2012"),
    				gender: "Female"
    			},
    			{
    				employeeId: 10003,
    				employeeName: "Shyam C",
    				employeeYearlyWage: 72000,
    				employeeAddress: "Eagan,MN, 553445",
    				employeeJoinDate: new Date("5/10/2012"),
    				gender: "Male"
    			}
    		]
      }
    },
    render()
    {
      return (
        <div class="app">
          {(this.props.location.pathname == '/')?
          <EmployeeList employees={this.state.employees}/> :
          (this.props.location.pathname == '/list-employees')?
            <EmployeeList employees={this.state.employees}/> :
            (this.props.location.pathname == '/add-employee')?
            <AddEmployeeForm/> :
            <Whoops404/>
        }


        </div>
      )
    }
  }
)
