import {Component} from 'react'
import {EmployeeList} from './EmployeeList'
import {Menu} from './Menu'
import {AddEmployeeForm} from './AddEmployeeForm'
export class App extends Component
  {
   constructor(props)
   {
     super(props)
     this.state = {
       employees: [
         {
           employeeId: 10001,
           employeeName: "Ramu Chinni",
           employeeYearlyWage: 60000,
           employeeAddress: "Eagan,MN, 553445",
           employeeJoinDate: "2012-02-10",
           gender: 'Male'
         },
         {
           employeeId: 10002,
           employeeName: "Latha  B",
           employeeYearlyWage: 84000,
           employeeAddress: "Eagan,MN, 553445",
           employeeJoinDate: "2012-05-09",
           gender: "Female"
         },
         {
           employeeId: 10003,
           employeeName: "Shyam C",
           employeeYearlyWage: 72000,
           employeeAddress: "Eagan,MN, 553445",
           employeeJoinDate: "2010-08-17",
           gender: "Male"
         }
       ]
     }
     this.addEmployee = this.addEmployee.bind(this)
   }

  addEmployee(newEmployee)
  {
     this.setState({
       employees: [
         ...this.state.employees, newEmployee
        ]
     })
  }

    render()
    {
      return (
        <div className="app">
        <Menu/>
         {(this.props.location.pathname == '/')?
         <EmployeeList employees={this.state.employees}/> :
         (this.props.location.pathname == '/list-employees')?
           <EmployeeList employees={this.state.employees}/> :
           (this.props.location.pathname == '/add-employee')?
           <AddEmployeeForm onNewEmployee={this.addEmployee}/> :
           <Whoops404/>
       }


        </div>
      )
    }
  }
