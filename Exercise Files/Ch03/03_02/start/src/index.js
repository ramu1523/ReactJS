import React from 'react'
import { render } from 'react-dom'
//import {EmployeeList } from './components/EmployeeList'
import { App } from './components/App'
import {Router, Route,hashHistory} from 'react-router'
import {Whoops404} from './components/Whoops404'
import './stylesheets/ui.scss'
//import {Employee} from './components/Employee-ES6'
//import { Employee } from './components/EmployeeCreateClass'

window.React = React

//Test Router

render(
	<Router history={hashHistory}>
       <Route path="/" component={App}></Route>
			 <Route path="/list-employees" component={App}></Route>
			 <Route path="/add-employee" component={App}></Route>
			 <Route path="*" component={Whoops404}></Route>
	</Router>,
	document.getElementById('react-container')
)

//Test State

//render(<App/>,document.getElementById('react-container'))

//Test Default Props and prototypes

/**render(
	<Employee employeeId="10001" employeeName="ramu chinni"/>,
	document.getElementById('react-container')
)*/

/**render(
	<Employee employeeId="100001" employeeName="Ramu Chinni"/>,
	document.getElementById('react-container')
)*/

/**render(
	<EmployeeList employees = {
		[
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
	/>,
	document.getElementById('react-container')
)*/
