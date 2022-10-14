import React from 'react'
import './hello_world.scss'
import Button from '../Button/Button'

const HelloWorld = () => {
  const [count, setCount] = React.useState(0)

  const updateCounter = (action) => {
    if (action === 'increment') {
      setCount(count + 1)
    } else if (action === 'decrement') {
      setCount(count - 1)
    }
  }

  return (
    <div className="main_container">
      <h1 className="app_title">Hello World!</h1>

      <div className="content_container">
        <Button ButtonClassName="increment_button" text="Increment" onClick={() => updateCounter('increment')} />
        <Button ButtonClassName="decrement_button" text="Decrement" onClick={() => updateCounter('decrement')} />
      </div>
      <span className="counter">
        The current counter state is:
        {' '}
        <strong>{count}</strong>
        {' '}
        ...
      </span>
    </div>
  )
}

export default HelloWorld
