import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div >
           <div className="flex "> 
           <NavLink to={'/'}><button className="btn btn-link">Home </button></NavLink>
           <NavLink to={'/add-coffee'}><button className="btn btn-link"> Add Coffee </button></NavLink>
           <NavLink to={'/update-coffee'}><button className="btn btn-link"> Update Coffee </button></NavLink>
           <NavLink to={'/users'}><button className="btn btn-link"> Users </button></NavLink>
           <NavLink to={'/register'}><button className="btn btn-link"> Register </button></NavLink>
           <NavLink to={'/login'}><button className="btn btn-link"> Login </button></NavLink>
           
           </div>
        </div>
    );
};

export default Navbar;