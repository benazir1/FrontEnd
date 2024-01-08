import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Books from './Components/Book/Books.jsx'
import { BrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<BrowserRouter>
<App/>
    </BrowserRouter>
  </React.StrictMode>,
)
