import {Link} from 'react-router'
import FaUserPlus from 'react-icons/lib/fa/user-plus'
import HomeIcon from 'react-icons/lib/fa/home'
import FaUser from 'react-icons/lib/fa/user'
export const Menu = () =>
<nav className="menu">
 <Link to="/" activeClassName="selected"> <HomeIcon /></Link>
 <Link to="/list-employees" activeClassName="selected"> <FaUser /></Link>
 <Link to="/add-employee" activeClassName="selected"> <FaUserPlus /></Link>
</nav>
