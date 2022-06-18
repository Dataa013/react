import Button from './Button'
import PropTypes from "prop-types"


const Header = ({title}) => {

 const onClick = () => {
  console.log('click')
 }


  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='green' text="Add" onClick={onClick}/>
    </header>
  ) 
}

// const styling = {
//   backgroundColor: 'red',
//   color: 'green'
// }

Header.defaultProps = {
  title: 'Task Tracker',
}

// Header.PropTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string
// }




export default Header