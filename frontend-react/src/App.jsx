import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/main'
import Footer from './components/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
