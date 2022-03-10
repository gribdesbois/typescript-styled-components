import { useState } from 'react'

import './App.css'
import Menubar from './components/Menubar'
import Navbar from './components/Navbar'
import PageBody from './components/PageBody'

const App: React.FC = () => (
  <>
    <Menubar />
    <Navbar />
    <PageBody />
  </>
)

export default App
