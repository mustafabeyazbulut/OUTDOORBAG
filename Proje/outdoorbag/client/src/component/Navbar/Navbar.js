import React from 'react';
import styles from './NavbarStyles.module.css';
import logo from './knapsack.png';
import { Link } from "react-router-dom"; 
import { Button } from '@chakra-ui/react';


function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
        <img src={logo} alt='home'/>
        </div>
        <ul className={styles.menu}>
          <li>  <Link to="/">Home</Link> </li>
          <li>  <Link to="/Component">Component</Link> </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/signin"><Button colorScheme='pink'>Login</Button></Link>
        <Link to="/signup"><Button colorScheme='pink'>Register</Button></Link>
      </div>
    </nav>
  )
}

export default Navbar