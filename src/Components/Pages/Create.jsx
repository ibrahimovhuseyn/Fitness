import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Toast } from 'reactstrap'
import Select from 'react-select';
import axios from 'axios';
import { apiUrl, toast_config } from '../../Confiq';
import { errormessage } from '../../Utils/Errormessage';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from 'react-toastify';


function Create() {
  const [users, setUsers] = useState([])
  const [validationErrors, setValidationErrors] = useState({})
  const [selected, setSelected]= useState('')


  useEffect(() => {
    axios.get(`${apiUrl}/users`).then(res => {
      setUsers(res.data)
    })
  }, [])


  function validate(data) {
    const errors = {
      user_id: "",
      title: "",
      img_url: "",
      description: ""
    }

    if (!data.user_id) {
      errors.user_id = errormessage.required("Author")
    }
    if (!data.title) {
      errors.title = errormessage.required("Title")
    }
    if (!data.img_url) {
      errors.img_url = errormessage.required("Image")
    }
    if (!data.description) {
      errors.description = errormessage.required("Description")
    }
    return errors

  }



  function handleCreate(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    const errors = validate(data)
    setValidationErrors(errors)

    if (Object.values(errors).filter(string => string).length) {
      toast.error("Please filled all boxes", toast_config)
      return
    }
    console.log(data);
    axios.post(`${apiUrl}/blogs`, {
      user_id: Number(data.user_id),
      title: data.title,
      img_url: data.img_url,
      description: data.description
    }).then(res => {
      e.target.reset()
      toast.success("Successful operation", toast_config)
      setSelected('')
    })


  }




  return (
    <Container>
      <div className='create mx-4 my-4'>
        <div>
          <h2 className='text-center mb-5'>Create your blog</h2>
        </div>
        <Form
          onSubmit={e => handleCreate(e)}
          className="form">
          <div className="form-group mb-4">
            <Label htmlFor='author'>Author</Label>
            <Select
            value={selected}
            onChange={option=>setSelected(option)}
              className={`${validationErrors.user_id ? "border border-danger":""} w-50`}
              isClearable
              name='user_id'
              options={users.sort((a,b)=>a.fullname.localeCompare(b.fullname))}
              getOptionValue={option => option.id}
              getOptionLabel={option => option.fullname}
            />
            {
              validationErrors.user_id &&
                <p className='mt-2 text-danger fw-bold'>{validationErrors.user_id}</p>
            }
          </div>
          <div className="form-group mb-4">
            <Label htmlFor='title'>Title</Label>
            <Input
              type='text'
              id='title'
              name='title'
              placeholder='Enter title'
              className={`${validationErrors.title ? "border border-danger"  : ""} w-50`}
            />
            {
              validationErrors.title && 
              <p className='mt-2 text-danger fw-bold'>{validationErrors.title}</p>
            }
          </div>
          <div className="form-group mb-4">
            <Label htmlFor='img_url'>Image url</Label>
            <Input
              type='text'
              id='img_url'
              name='img_url'
              placeholder='Enter image url'
              className={`${validationErrors.img_url ? "border border-danger" : ""} w-50`}
            />
             {
              validationErrors.img_url && 
              <p className='mt-2 text-danger fw-bold'>{validationErrors.img_url}</p>
            }
          </div>
          <div className="form-group mb-4">
            <Label htmlFor='description'>Description</Label>
            <Input
              type='textarea'
              id='description'
              name='description'
              placeholder='Enter blog description'
              rows={7}
              className={`${validationErrors.description ? "border border-danger" : ""} w-50`}

            />
             {
              validationErrors.description && 
              <p className='mt-2 text-danger fw-bold'>{validationErrors.description}</p>
            }
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </div>
    </Container>
  )
}

export default Create