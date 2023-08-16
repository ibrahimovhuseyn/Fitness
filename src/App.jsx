import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Header from './Components/Header/Header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import Users from './Components/Pages/Users'
import About from './Components/Pages/About'
import Create from './Components/Pages/Create'
import Blogs from './Components/Pages/Blogs'
import BlogItem from './Components/Lib/BlogItem';
import UserBlog from './Components/Pages/UserBlog';
import Register from './Components/Header/Nav/Register';
import { AppContext } from './context/AppContext';
import { toast } from 'react-toastify'
import { toast_config } from './Confiq';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.isAuth)

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