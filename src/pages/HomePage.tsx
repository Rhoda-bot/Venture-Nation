import React from 'react'
import DateDisplay from '../components/DateDisplay'
import SignUp from '../components/authentication/sign-up'
import Navbar from '../components/reusables/navbar'
import { NavLink } from 'react-router-dom'

const HomePage: React.FC = () => {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h3>Welcome Home!</h3>

            <h1><NavLink to='/auth/sign-up'>Register here!!!</NavLink></h1>
        </div>
        
    )
}

export default HomePage
