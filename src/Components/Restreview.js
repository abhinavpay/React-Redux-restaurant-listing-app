import React from 'react'
import   { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function Restreview({review}) {
    const [open, setOpen] = useState(false);
    console.log(review);

  return (
    <>
    <Button
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      variant='dark'
    className=''
    >
      View Comments
    </Button>
    <Collapse in={open}>
      <div id="example-collapse-text">
        <Card body style={{width:'400px'}}>

       {
       
       review.map(item=>(
        <div>
            <h6>{item.name}</h6>
            <p>{item.rating}</p>
            <p>{item.comments}</p>

        </div>
       ))
       
       }
        </Card>
      </div>

    </Collapse>
  </>
  )
}

export default Restreview