import React from 'react'
import useCallback from 'react';

function UseMemoAndCallback() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
  const [candies, setCandies] = React.useState(initialCandies);

  const dispense = React.useCallback(candy => {
    setCandies(s  => s.filter((item) => item !== candy));
  },[])

  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
      <div>Available Candy</div>
      {candies.length === 0 ? (
        <button onClick={() =>  setCandies(initialCandies)}>Fill</button>
        ): (
        candies.map((candy) => (
          <li key={candy}>
            <button onClick={() => dispense(candy)}>Grab</button>{candy}
          </li>
        ))
      )}
      </div>
      
      
    </div>
  )
}

export default UseMemoAndCallback
