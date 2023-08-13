import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form, Label, Input } from 'reactstrap'
import { errormessage } from '../../../Utils/Errormessage'
import { toast } from 'react-toastify'
import { apiUrl, toast_config } from '../../../Confiq'
import axios from 'axios'




function Register() {


  const [valiError, setValiError] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };


  function validation(data) {
    const errors = {
      fullname: "",
      username: "",
      nickname: "",
      email: "",
      password: "",
      avatar: ""
    }
    if (!data.fullname) {
      errors.fullname = errormessage.required("Fullname")
    }
    if (!data.username) {
      errors.username = errormessage.required("Username")
    }
    if (!data.nickname) {
      errors.nickname = errormessage.required("Nickname")
    }
    if (!data.email) {
      errors.email = errormessage.required("Email")
    }
    if (!data.password) {
      errors.password = errormessage.required("Password")
    }
    if (!data.avatar) {
      errors.avatar = errormessage.required("Avatar")
    }
    return errors
  }

  function handleRegister(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }




    const errors = validation(data)
    setValiError(errors)


    if (Object.values(errors).filter(string => string).length) {
      toast.error("Please filled the boxes", toast_config)
      return
    }

    axios.post(`${apiUrl}/users`, {
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      avatar: data.avatar
    }).then(res => {
      event.target.reset()
      toast.success("Successfully register", toast_config)
    })
  }



  return (
    <div className='register container my-5'>
      <Form
        onSubmit={event => handleRegister(event)}
      >
        <div className="form-group mb-4">
          <Label htmlFor='fullname'><b>Fullname:</b></Label>
          <Input
            type='text'
            id='fullname'
            name='fullname'
            placeholder='Enter your fullname'
            className={`${valiError.fullname ? "border border-danger" : ""} w-50`}
          />
          {
            valiError.fullname &&
            <p className='text-danger mt-3'>{valiError.fullname}</p>
          }
        </div>
        <div className="form-group mb-4">
          <Label htmlFor='password'><b>Password:</b></Label>
          <Input
            type={showPassword ? `text` : "password"}
            id='password'
            name='password'
            value={password}
            placeholder='Enter your password'
            className={`${valiError.password ? "border border-danger" : ""} w-50`}
            onChange={e => setPassword(e.target.value)}
          />

          <Input
            id='showPassword'
            type='checkbox'
            className='mt-2 mx-2'
            checked={showPassword}
            onChange={handleCheckboxChange}
          />
          <Label
            className='mt-1'
            htmlFor="showPassword"
          >Show password</Label>
          {
            valiError.fullname &&
            <p className='text-danger mt-3'>{valiError.password}</p>
          }
        </div>
        <div className="form-group mb-4">
          <Label htmlFor='email'><b>Email:</b></Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email '
            className={`${valiError.email ? "border border-danger" : ""} w-50`}
          />
          {
            valiError.email &&
            <p className='text-danger mt-3'>{valiError.email}</p>
          }
        </div>
        <div className="form-group mb-4">
          <Label htmlFor='username'><b>Username:</b></Label>
          <Input
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username '
            className={`${valiError.username ? "border border-danger" : ""} w-50`}
          />
          {
            valiError.username &&
            <p className='text-danger mt-3'>{valiError.username}</p>
          }
        </div>
        <div className="form-group mb-4">
          <Label htmlFor='nickname'><b>Nickname:</b></Label>
          <Input
            type='text'
            id='nickname'
            name='nickname'
            placeholder='Enter your nickname '
            className={`${valiError.nickname ? "border border-danger" : ""} w-50`}
          />
          {
            valiError.nickname &&
            <p className='text-danger mt-3'>{valiError.nickname}</p>
          }

          <div className="form-group mt-4">
            <Label htmlFor='avatar'><b>Profile picture:</b></Label>
            <Input
              type='file'
              id='avatar'
              name='avatar'
              placeholder=' '
              className={`${valiError.avatar ? "border border-danger" : ""} w-50`}
            />
            {
              valiError.author &&
              <p className='text-danger mt-3'>{valiError.author}</p>
            }
          </div>

        </div>
        <button type='submit' className='btn btn-secondary btn-lg'>Submit</button>
      </Form>
    </div>
  )
}

export default Register