import React from 'react'
import ReactDOM from 'react-dom/client'

import MainView from './views/MainView'

import './theme/css/main_style.css'
import 'react-gallery-carousel/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <MainView />
)

