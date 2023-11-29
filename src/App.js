import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar} from './components'
import './App.css'


const App = () => {
  return (
    <div className='box-border p-0 m-0 scroll-smooth' >
       <div className='gradient__bg '>
        <Navbar/>
        <Header/>
       </div>
       <Brand/>
       <WhatGPT3/>
       <Features/>
       <Possibility/>
    </div>
  )
}

export default App