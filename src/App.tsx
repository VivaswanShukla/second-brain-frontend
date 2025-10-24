import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button } from './components/ui/Button'
import './App.css'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Button startIcon={<PlusIcon size="md" />} variant="primary" size="sm" text="Add Content" onClick={() => {}}   />
      <Button startIcon={<ShareIcon/>} variant="secondary" size="md" text="Share Content" onClick={() => {}}   />
      <Button startIcon={<ShareIcon/>} variant="secondary" size="lg" text="Share Content" onClick={() => {}}   />
    </>
  )
}

export default App
