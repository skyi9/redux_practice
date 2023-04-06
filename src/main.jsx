import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import redux_store from './redux/store/redux_store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={redux_store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
