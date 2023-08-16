import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner, Table } from 'reactstrap'
import axios from "axios"
import { apiUrl } from '../../Confiq'
import Loading from '../Lib/Loading'
import { Link } from 'react-router-dom'
import Message from '../../Utils/Message'
import "../../assets/css/Users.css"

function Users() {
  const [users, setUsers] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${apiUrl}/users`).then(res => {
      setUsers(res.data)
      setIsLoading(false)
    })
  }, [])


  return (
    <Container>
      <div className="users py-4">
        {
          !isLoading ?
            <Table hover>
              {/* <thead> */}
                <th>No:</th>
                <th>Fullname</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nickname</th>
              {/* </thead> */}
              <tbody>
                {
                  users?.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}.</td>
                      <td>{item.fullname}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.nickname}</td>
                      <td>
                        <Link
                          className='btn btn-info'
                          to={`/userblog/${item.id}`}
                        >
                          Blogs
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            :
            <Loading />
        }
      </div>
      <Message sender="user" text="Hello how are you?" />
      <Message sender="bot" text="I'm a bot. I'm doing fine!" />
    </Container>
  )
}

export default Users