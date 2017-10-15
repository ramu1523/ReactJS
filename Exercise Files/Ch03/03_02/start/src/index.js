import React from 'react'
import { render } from 'react-dom'
import {Employee } from './components/Employee.js'

window.React = React
render(
	<Employee/>,
	document.getElementById('react-container')
)
