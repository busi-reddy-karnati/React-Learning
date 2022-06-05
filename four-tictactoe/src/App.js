import Icon from './Components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
const itemArray = new Array(9).fill('empty')
const App = () => {
  const [isCirle, setIsCirle] = useState(false)
  const [winMessage, setWinMessage] = useState('') //initially empty message
  const reloadGame = () => {
    //
  }
  const checkIsWinner = () => {
    //
  }
  const changeItem = (cellNumber) => {
    //
  }
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody>
                  <Icon name={item}></Icon>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
