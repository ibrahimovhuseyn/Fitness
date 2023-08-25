import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Logi'
import Header from './Components/Header/Header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/Responsive.css"
import Users from './Components/Pages/Users'
import About from './Components/Pages/About'
import Create from './Components/Pages/Create'
import Blogs from './Components/Pages/Home'
import BlogItem from './Components/Lib/BlogItem';
import UserBlog from './Components/Pages/UserBlog';
import Register from './Components/Header/Nav/Register';
import { AppContext } from './context/AppContext';
import { toast } from 'react-toastify'
import { toast_config } from './Confiq';
import Shopping from './Components/Pages/Shopping';
import Selected from './Components/Pages/Selected';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.isAuth)
  const [product, setProduct] = useState([])
  const [count, setCount] = useState(0)


  function addToCard(state) {

    const existProduct = product.find(item => item.id === state.id)
    setCount(prevState => prevState + 1)

    if(!existProduct){
      setProduct(prevState =>[
        ...prevState, {
          id: state.id,
          name: state.name,
          price: state.price,
          count : 1
        }
      ] )
      return
    }
    existProduct.count = existProduct.count + 1
    setProduct(prevState=>prevState)
  }


  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    setIsAuth(false)
    toast.info("You are logged out", toast_config)
  }

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      handleLogout,
      product,
      addToCard,
      count
    }}>
      <ToastContainer />
      {
        isAuth ?
          <div>
            <Header />
            <Routes>
              <Route path='/users' element={<Users />} />
              <Route path='/about' element={<About />} />
              <Route path='/create' element={<Create />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/userblog/:userId' element={<UserBlog />} />
              <Route path='/blogs/:id' element={<BlogItem />} />
              <Route path='/shopping' element={<Shopping/>}/>
              <Route path='/selected' element={<Selected/>}/>
            </Routes>
          </div>
          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      }
    </AppContext.Provider>
  )
}

export default App