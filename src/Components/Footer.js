import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Adress</Card.Header>
      <Card.Body>
        <Card.Title>Kochi</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Copyright © 2008 - 2023 cafe.com
      All Rights Reserved.</Card.Footer>
    </Card>
  )
}

export default Footer
