import React from 'react'
import { Provider } from 'react-redux'
import User from './User/User'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h2>App </h2>
                <hr />
                <User />
            </Provider>
        </div>
    )
}

export default App