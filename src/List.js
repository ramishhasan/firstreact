
import './App.css';
import { Navbar, Button, Table, Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserPlus, faHeart, faHome,faTrash } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
function App() {
  const [users, setUser] = useState([])
  useEffect(() => {
    getList()
  }, [])
  function getList() {
    fetch("http://localhost:3000/pos").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
      })
    })
  }
  function deleteUser(id) {
    fetch(`http://localhost:3000/pos/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getList()
      })
    })
  }

  return (
    <div className="App">
      <h1>GET ALL LIST API </h1>

      <Table responsive="sm">

        <thead>
          <tr>
            <th>USERID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
            <th>CATEOGRY</th>

            <th>IMAGE</th>
            <th>RATING</th>
            <th>OPERATIONS</th>


          </tr>
        </thead>
        {
          users.map((item, i) =>
            <thead>
              <tr key={i}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.price}</th>
                <th>{item.description}</th>
                <th>{item.category}</th>
                <th><Card.Img variant="top" src={item.image} style={{ height: '120px' }} /></th>
                <th>{item.rate}  {item.count}</th>

                <th>  <Button variant="light" onClick={() => deleteUser(item.id)}><FontAwesomeIcon icon={faTrash} style={{ fontSize: '30px' }} /></Button> 
<br/><br/><Button variant="light"><FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '30px',color:'blue' }} /></Button></th>
              </tr>
            </thead>

          )
        }
      </Table>
    </div>
  );
}
export default App;