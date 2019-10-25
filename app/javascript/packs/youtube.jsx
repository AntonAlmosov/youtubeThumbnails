import React from 'react'
import ReactDOM from 'react-dom'

import Youtube from '../components/Youtube'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Youtube />,
    document.body.appendChild(document.createElement('div'))
  )
})
