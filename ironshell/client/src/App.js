import './App.css';
import Home from './routes/Home';
import {FaHome, FaUser, FaChartLine} from "react-icons/fa"
import {BsPlusCircleFill, BsBellFill, BsCircleFill} from "react-icons/bs"
import {NavLink, Outlet} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const style = { color: "white", fontSize: "1.5em" }

  return (
    <div className="App">
      <nav className='navbar' style={style}>
        <NavLink 
          to='/home' 
          className={({isActive})=>
            isActive ? "text-red" : "text-white-50"
            }
          >
          <FaHome/>
          </NavLink>
        {/* <NavLink to='/user'><FaUser/></NavLink> */}
        <NavLink 
          to='/workout'
          className={({isActive})=>
          isActive ? "text-red" : "text-white-50"
          }
          >
            <BsPlusCircleFill/></NavLink>
        {/* <NavLink to='/statistics'><FaChartLine/></NavLink> */}
        {/* <NavLink to='/alerts'><BsBellFill/></NavLink> */}
      </nav>
      <div className='Outlet'>
        <Outlet/>
      </div>
      {/* <Home/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
