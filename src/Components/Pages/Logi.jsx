import React, { useContext, useEffect, useState } from 'react'
import { Container, Form, Input, Label } from "reactstrap"
import "../../assets/css/Home.css"
import { BsFacebook } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/Images/img.jpg"
import axios from 'axios'
import { apiUrl, toast_config } from '../../Confiq'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AppContext } from '../../context/AppContext'


function  Home() {

  const { setIsAuth } = useContext(AppContext)

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  }, [setIsAuth(false)])

  function getUsers() {
    axios.get(`${apiUrl}/users`).then(res => setUsers(res.data))
  }

  function handleCheckboxChange() {
    setShowPassword(!showPassword)
  }

  function login(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    // const fullname = data.fullname
    // const password = data.password

    const { fullname, password } = data

    const selectedUSer = users.find(item => item.username === fullname && item.password === password)

    if (!selectedUSer) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or password is not valid!',
      })
      return
    }


    setIsAuth(true)
    localStorage.setItem("isAuth", true)
    navigate("/blogs")

  }
  return (
    <Container>
      <div className='home'>
        <div className='left'>
          <div className='homeForm'>
            <h1>MEGAWIDTH</h1>
            <Form
              onSubmit={e => login(e)}
            >
              <Input
                name='fullname'
                type='text'
                placeholder='Phone number, username or email'
              />
              <Input
                name='password'
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
              <div className='text-start mx-4'>
                <Input
                  type='checkbox'
                  id='password'
                  onChange={handleCheckboxChange}
                />
                <Label
                  className='mt-1'
                  htmlFor="password"
                >Show password
                </Label>
              </div>
              <button
                type='submit'
                className='btn btn-primary btn-sm'>
                Log in
              </button>

            </Form>
            <div className="d-flex justify-content-between align-items-center">
              <div className="after"></div>
              <p>OR</p>
              <div className="after"></div>
            </div>

            <div className="facebook">
              <BsFacebook />
              <span className='mx-3'><Link className='link'>Log in with Facebook</Link></span>
            </div>
            <Link className='text-muted text-decoration-none'>
              Forgot password?
            </Link>
          </div>


          <div className="homeRegister">
            <p>Don't have an account</p>
            <Link to="/register">Sign up</Link>
          </div>
        </div>

        <div className="right">
          <img src={logo} alt="image" />
        </div>

      </div>
    </Container>
  )
}

export default Home