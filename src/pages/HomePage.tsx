import React from 'react'
import DateDisplay from '../components/DateDisplay'
import SignUp from '../components/authentication/sign-up'
import Navbar from '../components/reusables/navbar'

const HomePage: React.FC = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <SignUp />
        </div>
        // <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        //     <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
        //     <DateDisplay />
        // </div>
    )
}

export default HomePage
