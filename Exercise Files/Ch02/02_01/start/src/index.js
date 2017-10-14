/**const {createElement} = React
const {render}=ReactDOM
const style = {
  backgroundColor:'orange',
  color:'white',
  fontFamily:'verdana'
}
const title = createElement(
  'h1',
  {id: 'title',className: 'header',style: style},
  'Hello React World'
)

render(
  title,
  document.getElementById('react-container')
)*/

//The below code will not work because  browser will not recognize the tags until you use some compiler/traspiler tool like babel to convert the below code to java script.

 const {render} = ReactDOM
render(
  <h1 id='title'
  className='header'
  style={{backgroundColor:'orange',
  color:'white',
  fontFamily:'verdana'}}>
  Welcome To React World!!</h1>,
  document.getElementById('react-container')
)
