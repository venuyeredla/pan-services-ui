import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import './products.css';
import { Button,Offcanvas,Table } from 'react-bootstrap';
import { getProducts } from '../../services/apiClient';


function ProdctConvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button variant="secondary">List products</Button>{' '}
        <Button variant="secondary">   <Link to="/newproduct">Create New product</Link>  </Button>{' '}   
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const ProductsNew= () => { 
  return (
    <div>
      <h3>Edit product</h3>  
    </div>
      )
}

const Products =(props) => {
  const [products, setProducts] = useState([])
  useEffect( () => {
    getProducts().then(response => { 
    console.log("Debugging...")
    setProducts(response);
  }).catch(error => {
    console.log(error);
  });
   
  },[])
 
      return (
        <div> 
          <ProdctConvas> </ProdctConvas>
          <b>Seller page </b>
          <Table striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Pprice</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

            {
              products.map( (product,idx) =>
               //  <li key={product.name}> {product.name} -- {product.price} </li>
              <tr key={idx}>
                <td >{idx+1}</td>
                <td >{product.name}</td>
                <td >{product.price}</td>
                <td >Edit</td>
              </tr>
                )
            }

          </tbody>
        </Table>
    </div>

      );
    }

  export {
    Products,
    ProductsNew,
  }