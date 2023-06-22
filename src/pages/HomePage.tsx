import React from 'react'
import DateDisplay from '../components/DateDisplay'
import SignUp from '../components/authentication/sign-up'
import Navbar from '../components/reusables/navbar'
import { NavLink } from 'react-router-dom'
import CustomNavbar from '../components/reusables/customNavbar'
import Hero from './home/hero'

const HomePage: React.FC = () => {
    return (
        <>
            <CustomNavbar />
            <Hero />
        </>
    )   
}

export default HomePage
