import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import SignIn from './components/authentication/sign-in'
import ForgotPassword from './components/authentication/forgot-password'
import SignUp from './components/authentication/sign-up'
import ResetPassword from './components/authentication/reset-password'
import ConfirmEmail from './components/authentication/confirm-email'
import { ProtectedRoute } from './resources/protectedRoute'
import ProfileView from './components/profiles/profile-venture/profileView'
import ProfileProfile from './components/profiles/profile-profile'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                <Route path="/auth/sign-in" element={<SignIn />} />
                <Route path="/auth/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/confirm-email" element={<ConfirmEmail />} />

                <Route path='/' element={<ProtectedRoute />}>
                    <Route path='/profile' element={<ProfileProfile />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default RootComponent
