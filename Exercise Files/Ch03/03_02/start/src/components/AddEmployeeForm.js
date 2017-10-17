import {PropTypes, Component} from 'react'

// form and references using state less functions

export const AddEmployeeForm = ({ employeeId, employeeName, employeeYearlyWage,employeeAddress,employeeJoinDate}) =>
{
  let _employeeId, _employeeName, _employeeYearlyWage, _employeeAddress, _employeeJoinDate
  const submit = (e) =>
  {
    //prevent the default behaviour
    e.preventDefault()
    console.log('employeeId',_employeeId.value)
    console.log('employeeName',_employeeName.value)
    console.log('employeeYearlyWage',_employeeYearlyWage.value)
    console.log('employeeAddress',_employeeAddress.value)
    consol.log('employeeJoinDate',_employeeJoinDate.value)
    //consol.log('gender',this.refs.gender.value)
  }

  return(
    <form className="add-employee-form" onSubmit={submit}>
      <label htmlFor="employeeId"> Employee Number: </label>
            <input id="employeeId" type="number" required defaultValue={employeeId} ref={input => _employeeId = input}/>
     <label htmlFor="employeeName"> Employee Name: </label>
            <input id="employeeName" type="text" required defaultValue={employeeName} ref={input => _employeeName = input}/>
     <label htmlFor="employeeYearlyWage"> Employee Yearly Wage: </label>
            <input id="employeeYearlyWage" type="number" required defaultValue={employeeYearlyWage} ref={input => _employeeYearlyWage=input}/>
      <label htmlFor="employeeAddress"> Employee Address: </label>
            <input id="employeeAddress" type="text" required defaultValue={employeeAddress} ref={input => _employeeAddress = input}/>
       <label htmlFor="employeeJoinDate"> Employee Join Date: </label>
            <input id="employeeJoinDate" type="date" required defaultValue={employeeJoinDate} ref={input => _employeeJoinDate = input}/>

      <div className="radio">
            <label htmlFor="gender"> Gender: </label>
            <label> <input id="gender" type="radio" value="Male" ref="gender"/> Male
          </label>
            <label><input type="radio" id="gender" value="FeMale" ref="gender"/> FeMale </label>
            </div>
      <button> Add Employee</button>
    </form>
  )
}

 /**export class AddEmployeeForm extends Component
{

  constructor(props)
  {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e)
  {
    //prevent the default behaviour
    e.preventDefault()
    console.log('employeeId',this.refs.employeeId.value)
    console.log('employeeName',this.refs.employeeName.value)
    console.log('employeeYearlyWage',this.refs.employeeYearlyWage.value)
    console.log('employeeAddress',this.refs.employeeAddress.value)
  //  consol.log('employeeJoinDate',this.refs.employeeJoinDate.value)
    //consol.log('gender',this.refs.gender.value)
  }

  render()
  {
    const { employeeId, employeeName, employeeYearlyWage,employeeAddress,employeeJoinDate} = this.props
    return(
      <form className="add-employee-form" onSubmit={this.submit}>
        <label htmlFor="employeeId"> Employee Number: </label>
              <input id="employeeId" type="number" required defaultValue={employeeId} ref="employeeId"/>
       <label htmlFor="employeeName"> Employee Name: </label>
              <input id="employeeName" type="text" required defaultValue={employeeName} ref="employeeName"/>
       <label htmlFor="employeeYearlyWage"> Employee Yearly Wage: </label>
              <input id="employeeYearlyWage" type="number" required defaultValue={employeeYearlyWage} ref="employeeYearlyWage"/>
        <label htmlFor="employeeAddress"> Employee Address: </label>
              <input id="employeeAddress" type="text" required defaultValue={employeeAddress} ref="employeeAddress"/>
         <label htmlFor="employeeJoinDate"> Employee Join Date: </label>
              <input id="employeeJoinDate" type="date" required defaultValue={employeeJoinDate} ref="employeeJoinDate"/>

        <div className="radio">
              <label htmlFor="gender"> Gender: </label>
              <label> <input id="gender" type="radio" value="Male" ref="gender"/> Male
            </label>
              <label><input type="radio" id="gender" value="FeMale" ref="gender"/> FeMale </label>
              </div>
        <button> Add Employee</button>
      </form>
    )
  }
} */
AddEmployeeForm.defaultProps={
  employeeId: 111111,
  employeeName: 'Arun K',
  employeeYearlyWage: 70000,
  employeeAddress: 'Eagan,MN,55123',
  employeeJoinDate: '2010-02-15'
  //gender: Male
}
AddEmployeeForm.propTypes =
{
  employeeId: PropTypes.number.isRequired,
  employeeName: PropTypes.string.isRequired,
  employeeYearlyWage: PropTypes.number.isRequired,
  employeeAddress: PropTypes.string.isRequired,
  employeeJoinDate: PropTypes.string.isRequired
//  gender: PropTypes.string.isRequired
}
