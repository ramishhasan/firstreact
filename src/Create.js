import './App.css';
import './style.css'
import { Navbar, Button, Table, Card,Form,Row,Col } from 'react-bootstrap'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PhoneNumberInstance } from 'twilio/lib/rest/lookups/v1/phoneNumber';
function App() {
    const [id, setid] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const [image, setimage] = useState("");
    const [rate, setrate] = useState("");
    const [count, setcount] = useState("");
    const [msg, setMessage] = useState("");

    function saveData() {
        let data = { id, title, price, description, category, image, rate, count }
        axios.post('http://localhost:3000/pos', data)
            .then(res => {
                console.log(res.data)
                setMessage('PRODCT ADDED SUCCESSFULLY')
            })
            .catch(err => console.log(err))             
        setid('')
        settitle('')
        setprice('')
        setdescription('')
        setcategory('')
        setimage('')
        setrate('')
        setcount('')
        setMessage('')
    }
    return (
        <div className="App">
            <h1 style={{color:'green'}}>ADD NEW PRODUCTS</h1>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <Form style={{margin:'10px'}}>
  <Row style={{margin:'30px'}}>
    <Col>
      <Form.Control placeholder="id..." onChange={(e) => { setid(e.target.value) }} value={id}/>
    </Col>
    <Col>
      <Form.Control placeholder="title..." onChange={(e) => { settitle(e.target.value) }} value={title}/>
    </Col>
  </Row>
  <Row style={{margin:'30px'}}>
    <Col>
      <Form.Control placeholder="price...." onChange={(e) => { setprice(e.target.value) }} value={price}/>
    </Col>
    <Col>
      <Form.Control placeholder="description..." onChange={(e) => { setdescription(e.target.value) }} value={description}/>
    </Col>
  </Row >
  <Row style={{margin:'30px'}}>
    <Col>
      <Form.Control placeholder="cateogry..."onChange={(e) => { setcategory(e.target.value) }} value={category} />
    </Col>
    <Col>
      <Form.Control placeholder="image link..." onChange={(e) => { setimage(e.target.value) }}value={image}/>
    </Col>
  </Row>
  <Row style={{margin:'30px'}}>
    <Col>
      <Form.Control placeholder="rate..." onChange={(e) => { setrate(e.target.value) }} value={rate}/>
    </Col>
    <Col>
      <Form.Control placeholder="count...." onChange={(e) => { setcount(e.target.value) }} value={count}/>
    </Col>
  </Row>
</Form>

<Button variant="primary" size="lg" active  onClick={saveData}>
    ADD PRODUCTS...
  </Button>
        </div>
    );
}
export default App