import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './App.css'
import './cssfix.css'
import './css/animate.css'
import './css/owl.carousel.min.css'
import './css/normalize.css'
import './css/magnific-popup.css'
import './css/fontawesome.all.min.css'
import './css/bootstrap.min.css'
import './css/owl.theme.default.min.css'
import './css/responsive.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
