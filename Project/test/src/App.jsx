import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      <h1>wellcome to robotlab thailand</h1>
      <p>{count}</p>
      <Mybutton /> 

    </div>

    
  )
}

export default App
