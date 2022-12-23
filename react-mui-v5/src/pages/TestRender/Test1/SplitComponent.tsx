import React from 'react'
import ComponentWidthButton from './ComponentWidthButton'
import VerySlowComponent from './VerySlowComponent'

const SplitComponent = () => {
  return (
    <div>
    <h3>component with state moved down</h3>
      <p>Click this button - "slow" component will NOT re-render</p>
      <ComponentWidthButton />
      <VerySlowComponent />
    </div>
  )
}

export default SplitComponent
