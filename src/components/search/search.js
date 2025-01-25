import React from 'react';
import './search.css';
import { useRef,useState,useEffect} from 'react';//useContext,useMemo
import { Card,Carousel } from 'react-bootstrap';
import { getProducts,getQuotes } from '../../services/apiClient';
import Form from 'react-bootstrap/Form';
import {  Row,Col,Button } from 'react-bootstrap';

function HomePageAds() {
  const [count, setCount] = useState(5);
  const [query, setQuery] = useState({"query":"*:*","category":"Default","show":false});
  const [carouselData, setCarouselData] = useState([]);
  //const [promos, setPromos]=useState([])
  //useMemo(() => createPromos(count), [count]);
  useEffect(()=>{ setCarouselData(getQuotes())},[])

  return (
    <Carousel>
      {carouselData.map(
          (quote,idx) => 
            <Carousel.Item key={idx}>
            <div style={{width:"400px",height:"400px"}}>
            <h1>{quote.q}</h1>
            </div>
             <Carousel.Caption>
               <p>{quote.q}</p>
             </Carousel.Caption>
           </Carousel.Item>

        )
      }
    </Carousel>
  );
}

function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

function ProductResults(props){
      return (
        <>
           <div className='products_results'>
          <h3> Showing products of {props.products.length}</h3>
            {
             props.products.map((product,idx) =>
               //  <li key={product.name}> {product.name} -- {product.price} </li>
                <Card style={{ width: '100%' }} key={idx}>
                <Card.Body>
                  <Card.Title> {product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{product.price} Rs</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card> 
                )
            }
      </div>
        </>
       
      );
  }

const Search = () => {

  const searchInputRef = useRef(null);
  const [show, setShow] = useState(false)
  const [products, setProducts] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`Query: ${searchInputRef.current.value}`)
    getProducts().then(products => { 
      setProducts(products);
    })
    console.log(products)
   // props.callback(searchInputRef.current.value)
 }

  useEffect( () => { 
    setShow(true);
  },[])
  
  return (
        <div> 
          <div>
          <Form  onSubmit={handleSubmit}>
             <Row>
               <Col xs lg="2">
               <Form.Select aria-label="Default select example">
                   <option>Categories</option>
                   <option value="1">Electronics</option>
                   <option value="2">Furniture</option>
                   <option value="3">Books</option>
             </Form.Select>
               </Col>
               <Col>
               <Form.Control type="text" name="query"   placeholder="Your query"   ref={searchInputRef} />
               </Col>
               <Col>
               <Button variant="secondary" type='submit'>search</Button>{' '}
               </Col>
             </Row>
           </Form>
          </div>
          <div style={{width:"20%", float:"left"}}>
            Faceting goes here.
            <Counter></Counter>
          </div>
          <div style={{float:"left",width:"79%"}}>
          <div className='home_page'>
             <HomePageAds/>
          </div>
           < ProductResults show={show} products={products}> </ProductResults>
          </div>
        </div>
      );
  }

export default Search;