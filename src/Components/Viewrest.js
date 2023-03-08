import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Row,Image } from 'react-bootstrap';
import { useParams } from 'react-router';

import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

  const urlparams=useParams()
  console.log(urlparams);
  console.log(urlparams.id);


  
   //1. create  a state

   const [AllResturants,setAllResturants] = useState([])

   //function to call api to get data from restuarnt.json

   const getResturants = async()=>{
       await fetch('/restaurants.json')
       .then((data)=>{
               data.json()
               .then((result)=>{
                   // console.log(result);
                   setAllResturants(result.restaurants)
               })

               
           })
   }
   // console.log(AllResturants);
   useEffect(()=>{
       getResturants()
   },[])
   const viewrest = AllResturants.find(item=>item.id==urlparams.id)
   console.log(viewrest);


  return (
    <>
    
    {
      viewrest?(
        <Row className='m-3'>
          <Col className='ms-5' md={4}>
          <Image src={viewrest.photograph} fluid />
          </Col>
          <Col md={5}>
          <ListGroup>
      <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.neighborhood}</h3></ListGroup.Item>
      <ListGroup.Item><h2>{viewrest.address}</h2></ListGroup.Item>
      <ListGroup.Item><Restop operate={viewrest.operating_hours} /></ListGroup.Item>

      <Restreview review={viewrest.reviews}/>


    </ListGroup>



    </Col>
        </Row>
      ):'null'
    }

    </>
  )
}

export default Viewrest