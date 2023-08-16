import React, { useState } from 'react'
import "../../assets/css/About.css"
import { Container, Row } from 'reactstrap'
import Trainers from '../Lib/Trainers'
import OurProducts from '../Lib/OurProducts'

function About() {

  return (
    <div className='about '>
      <Container>
        <div className=''>
        <Row>
        <Trainers/>
        <OurProducts/>
        </Row>
        </div>
      
      </Container>
    </div>
  )
}

export default About