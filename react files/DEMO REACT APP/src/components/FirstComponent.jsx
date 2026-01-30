import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
  return (
    <div>
        <SecondComponent/>
        <h1>here i am wrapping my second component inside my FirstComponent</h1>
    </div>
  )
}

export default FirstComponent