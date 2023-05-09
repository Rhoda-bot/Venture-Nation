import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import { UserContext } from './context/userContext'

const App: React.FC = () => {
    const [user, setUser] = useState<any>([]);
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UserContext.Provider value={{user, setUser}}>
                    <RootComponent />
                </UserContext.Provider>
            </PersistGate>
        </Provider>
    )
}

export default App
