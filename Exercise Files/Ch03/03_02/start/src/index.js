import React from 'react'
import { render } from 'react-dom'
import {Employee } from './components/Employee.js'

window.React = React
render(
	<Employee employeeId={100001} employeeName="Ramu Chinni" employeeAddress="Eagan, MN, 551234"/>,
	document.getElementById('react-container')
)
