import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemContextProvider from './context/itemContextProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>
);
