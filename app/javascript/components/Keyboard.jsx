import React from 'react'
import { useState, useEffect } from 'react'

// Usage

let prop = {}
export default function KeyboradListener(props) {
  // Call our hook for each key that we'd like to monitor
  const press = useKeyPress(props.handlePlay)
  prop = Object.assign({}, props)
  return press
}

// Hook
function useKeyPress(targetKey, handlePlay) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key == '1') {
      prop.handleNum(1)
    } else if (key == '2') {
      prop.handleNum(2)
    } else if (key == '3') {
      prop.handleNum(3)
    } else if (key == '4') {
      prop.handleNum(4)
    } else if (key == '5') {
      prop.handleNum(5)
    } else if (key == '6') {
      prop.handleNum(6)
    } else if (key == '7') {
      prop.handleNum(7)
    } else if (key == '8') {
      prop.handleNum(8)
    } else if (key == '9') {
      prop.handleNum(9)
    } else if (key == '0') {
      prop.handleNum(0)
    } else if (key == 'Backspace') prop.handleDel()
    else if (key == 'Enter') prop.handleView()
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {}

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}
