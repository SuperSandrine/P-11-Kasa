import Navigation from "../Navigation";

import logo from "../../assets/LOGO.svg"

// function NavList() {
//   // This styling will be applied to a <NavLink> when the
//   // route that it links to is currently selected.
//   // let activeStyle = {
//   //   textDecoration: "underline",
//   // };

//   //let activeClassName = "underline";
//   // intérêt à le mettre dans un ul et li?
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink
//             to="home"
// //            style={({ isActive }) =>
// //              isActive ? activeStyle : undefined
// //            }
//           >
//             Accueil
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="about"
// //            className={({ isActive }) =>
// //              isActive ? activeClassName : undefined
// //            }
//           >
//             À propos
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

function Logo(){
  return(
  <img src={logo} alt="logo de Kasa"/>
  )
}

function Header(){
  return(
  <header >
    <Logo/>
    <Navigation/>
  </header >
  )
}


export default Header
