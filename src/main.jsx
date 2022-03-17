import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { MarketProvider } from './Context/Hooks/MarketProvider'

ReactDOM.render(
    <MarketProvider>
     <App />
    </MarketProvider>,
  document.getElementById('root')
)
