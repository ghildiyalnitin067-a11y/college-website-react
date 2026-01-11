import React, { useEffect,useState } from 'react'
import { Link, Element } from 'react-scroll'
import './Navbar.css'
import logo_icon from '../../assets/usar.png'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky,setsticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setsticky(true):setsticky(false)
    })
  },[]);
   const [mobileMenu,setMobileMenu] = useState(false);
  const togleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo_icon} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='h' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='p' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='a' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='c' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='t' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='co' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={togleMenu} alt="" />
    </nav>
  )
}

export default Navbar
