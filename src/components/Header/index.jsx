import Navigation from "../Navigation";

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
  <img src="https://picsum.photos/200/300" alt="random photographie"/>
  )
}

function Header(){
  return(
  <div>
    <Logo/>
    <Navigation/>
  </div>
  )
}


export default Header
