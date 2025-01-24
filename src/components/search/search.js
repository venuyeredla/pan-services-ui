import React from 'react';
import './search.css';
import { useRef,useState,useEffect,useContext,useMemo} from 'react';
import { Card,Carousel } from 'react-bootstrap';
import { getProducts,getQuotes } from '../../services/apiClient';

import QueryContext from '../../context/contex';

function HomePageAds() {
  const [count, setCount] = useState(5);
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
  const [products, setProducts] = useState([])
  useEffect( () => { 
    getProducts().then(products => { 
      setProducts(products);
    })
    console.log(products)
  },[])
      return (
        <div className='products_results'>
          <h3> Showing products of {products.length}</h3>
            {
             products.map(product =>
               //  <li key={product.name}> {product.name} -- {product.price} </li>
                <Card style={{ width: '100%' }}>
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
      );
  }

const Search = () => {
  const [show, setShow] = useState(false)
 
  const query = useContext(QueryContext);
  const searchInputRef = useRef(null);
  useEffect( () => { 
    setShow(true);
  },[])
  
  return (
        <div> 
          <div style={{width:"20%", float:"left"}}>
            Faceting goes here.
            <Counter></Counter>
          </div>
          <div style={{float:"left",width:"79%"}}>
          <div className='home_page'>
             <HomePageAds/>
          </div>
          
            < ProductResults show={query.show} > </ProductResults>
          </div>
         
        </div>
      );
  }

  export default Search;