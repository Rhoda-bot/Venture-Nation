import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import { CourseContext, UserContext } from './context/userContext'
import { createContext } from "react";

const App: React.FC = () => {
    const [user, setUser] = useState<any>([]);
    const [ courses, setCourses] = useState<any>([]);



    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UserContext.Provider value={{user, setUser}}>
                   <CourseContext.Provider value ={{courses, setCourses}}>
                     <RootComponent />
                   </CourseContext.Provider>
                </UserContext.Provider>
            </PersistGate>
        </Provider>
    )
}

export default App
