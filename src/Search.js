import React, { useState } from 'react'
import axios from 'axios'
import { Navbar, Button, Table, Card, InputGroup, FormControl } from 'react-bootstrap'

function Search() {
    const [users, setUser] = useState([])
    function searchpro(key) {
        axios.get(" http://localhost:3000/pos?q=" + key)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
    }
    return (
        <div className="App">
            <h1>SEARCH PRODUCTS </h1>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" ></InputGroup.Text>
                <FormControl
                    placeholder="Username" 
                    onChange={(e) => searchpro(e.target.value)}
                    aria-label="Search products..."
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            {
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


                                </tr>
                            </thead>

                        )
                    }
                </Table>
            }
        </div>
    );
}
export default Search