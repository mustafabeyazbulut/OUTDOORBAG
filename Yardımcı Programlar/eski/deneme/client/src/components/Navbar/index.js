import React from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";      // import react-router-dom
import { Button } from '@chakra-ui/react'
import logo from './OutdoorBag.png'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
        <img src={logo} alt='some value'/>
        </div>
        
        <ul className={styles.menu}>
          <li>  <Link to="/">Home</Link> </li>
          
        </ul>
      </div>


      <div className={styles.right}>
        <Link to="/signin">
          <Button colorScheme='pink'>Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme='pink'>Register</Button>
        </Link>
      
      </div>
    </nav>
 
  );

}
export default Navbar;