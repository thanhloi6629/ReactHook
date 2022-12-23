import React from 'react'
import FullComponent from './FullComponent'
import SplitComponent from './SplitComponent'

const Test = () => {
  return (
    <div>
			<h2>Open console, click a button</h2>
			<p>Re-render should be logged on every click</p>

			<FullComponent /> 
			<hr />
      <hr />
      <SplitComponent />
    </div>
  )
}

export default Test
