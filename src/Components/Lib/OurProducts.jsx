import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function OurProducts() {
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get(`${apiUrl}/products`).then(res => setProducts(res.data))
  }, [])

  const toggle = () => setModal(!modal);

  return (
    <div className='col-6'>
      <h1 className='text-center mb-4'>Our Products</h1>
    
    <div className='products'>
      {
          products.map(item=>(
            <div key={item.id}>
              <p>{item.name}</p>
              <div className="img_wrapper">
                <img src={item.img_url} alt="img" />
              </div>
              <button
              className='btn btn-primary mt-2'
              >Buy online</button>
              
            </div>
          ))
      }
    </div>
    <div>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
   
    </div>
  )
}

export default OurProducts