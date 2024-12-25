import logo from "../utils/images/logo.png"

const Header = () =>{
  return (
    <div className="header">
       <div className="logo-container">
          <img className="logo"
             src={logo} alt="SnackSprint Logo"
          />
       </div>
       <div className="navitems">

         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
         </ul>

       </div>
    </div>
  );
}

export default Header;