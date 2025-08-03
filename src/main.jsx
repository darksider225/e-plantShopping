import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { AddedToCartProvider } from './context/AddedToCartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AddedToCartProvider>
        <App />
      </AddedToCartProvider>
    </Provider>
  </React.StrictMode>,
)
