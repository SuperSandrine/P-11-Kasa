import Navigation from "../Navigation/Navigation";
import logo from "../../assets/LOGO.svg"

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
