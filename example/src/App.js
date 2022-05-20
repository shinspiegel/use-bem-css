import React from 'react'

import { useMyHook } from 'use-bem-css'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
