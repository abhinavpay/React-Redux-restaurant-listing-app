import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestListAction} from '../actions/restlistAction'
import { useDispatch, useSelector } from 'react-redux';
// import { restaurantListReducer } from '../Reducer/restReducer';


function Restlist() {


    //1. create  a state

    const [AllResturants,setAllResturants] = useState([])

    //function to call api to get data from restuarnt.json

    const getResturants = async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
                data.json()
                .then((result)=>{
                    // console.log(result);
                    setAllResturants(result.restaurants)
                })

                
            })
    }


    console.log(AllResturants);
 

    const dispatch = useDispatch()

    const result = useSelector(state=>state.restaurantReducer)

    console.log(result);

    const {restaurantList}=result;


    useEffect(()=>{
        // getResturants()

        dispatch(RestListAction())


    },[])

  return (
    <Row>
        
            
    
    {
        
        restaurantList?.map((item)=>(
            <Restcard restaurant ={item} />
            // <h1>{item.name}</h1>
            
        ))
    }


    </Row>
  )
}

export default Restlist
