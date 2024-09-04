import React from 'react'
import { Header, Footer, Possibility, Features, Whatgpt3, Blog } from './containers'
import { CTA, Brand, Navbar } from './components'

import './App.css'



const App = () => {
  return (
    <div className='App'>
      <div className='grandient__bg'>
        <Navbar />
        <Header />

      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA /> 
      <Blog />
      <Footer />
    </div>
  )
}

export default App
