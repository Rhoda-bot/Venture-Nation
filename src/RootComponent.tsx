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
import { GaurdSignInPage, GaurdSignupPages, ProtectedRoute } from './resources/protectedRoute'
import ProfileView from './components/profiles/profile-venture/profileView'
import ProfileProfile from './components/profiles/profile-profile'
import EditProfile from './components/profiles/profile-profile/edit-profile'
import Ventures from './components/ventures'
import AddVenture from './components/ventures/add-venture'
import VentureDetails from './components/ventures/venture-details'
import EditVenture from './components/ventures/edit-venture'
import Dashboard from './components/dashboard'
import LearningHub from './components/learning-hub'
import LearningHubs from './components/learning-hub/learningHub'
import CardDetails from './components/reusables/cardDetails'
import ResourceHub from './components/resource-hub'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path='/' element={<HomePage />}/>
                <Route path='/auth/'  element={<GaurdSignInPage />}>
                    <Route path="sign-in" element={<SignIn />} />
                     <Route path="sign-up" element={<SignUp />} />
                </Route>
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/auth/confirm-email" element={<ConfirmEmail />} />

                <Route path='/' element={<ProtectedRoute />}>
                    <Route path='/profile' element={<ProfileProfile />}/>
                    <Route path='/profile/edit-profile' element={<EditProfile />}/>
                    <Route path='/ventures' element={<ProfileView />}/>
                    <Route path='/ventures/edit-venture/:venturename' element={<EditVenture />}/>
                    <Route path='/ventures/:venturename' element={<VentureDetails />}/>
                    <Route path='/edit-venture' element={<Ventures />}/>
                    <Route path='/venture/add-venture' element={<AddVenture />}/>
                    <Route path='/dashboard' element={<Dashboard />}/>
                </Route>
                <Route element={< LearningHubs/>}>
                    <Route path='/learning-hub/:slug' element={<CardDetails />}/>
                    <Route path='/learning-hub' element={<LearningHub />}/>
                    <Route path='/resource-hub' element={<ResourceHub />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default RootComponent
