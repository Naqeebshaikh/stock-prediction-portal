import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/main'
import { BrowserRouter,Routes,Route } from "react-router"
import Register from './components/register'
import Header from './components/Header'
import Footer from './components/footer'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
