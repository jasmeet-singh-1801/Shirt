import React from 'react'
import Canvas from './canvas'
import Home from './pages/Home'
import Customizer from './pages/customizer'

function App () {
    return (
      <main className='app transition-all ease-in'>
        

        <Home
        />
        <Canvas/>
        <Customizer/>
      </main>
    )
}

export default App 