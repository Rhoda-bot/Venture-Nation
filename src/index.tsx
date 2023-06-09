import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root')!) // createRoot(container!) if you use TypeScript
root.render(<App />)


axios.defaults.baseURL = 'https://api.venturenation.co/api/v1/';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
