import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import logo from '../../assets/logo.jpg'
import { AppButton } from '../Buttons/Buttons'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <img src={logo} alt='SAP logo' />
                </div>
                <p className={styles.title}>SATHYABAMA ACADEMIC PLANNER</p>
            </div>
            <AppButton btnText={"About"}/>
        </nav>
    )
}

export default Navbar