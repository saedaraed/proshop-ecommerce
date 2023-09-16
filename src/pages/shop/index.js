import Head from 'next/head'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Navbar from '../../layouts/Nav'

function ProductsPage({ products }) {
    console.log(products)
  return (
    <>
    <Head>
    <title>Shop</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div>
    <Navbar> </Navbar>
      {/* <h1>Products</h1> */}
      <Container>
      <Row>
     
        {products.map((product) => (
        <Col lg={3}>
          <Card key={product.id} style={{ marginBottom:'20px'}}>
          <Link href={`/shop/${product._id}`} legacyBehavior>
                  <a style={{textDecoration:'none'}}>
          <Card.Img variant="top" src={product?.images[0]} />
          <Card.Body>
         
            <Card.Title>{product?.name}</Card.Title> 
            <Card.Text>
          {product?.price}$
            </Card.Text>

   
            <Stack >
            <Rating name="size-medium" defaultValue={product?.rating} readOnly/>
            </Stack>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
          </a>
                </Link>
        </Card>
        </Col>
        ))}
     
      </Row>
      </Container>
    </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://prohop-express.herokuapp.com/api/products');
    const products = response.data.products;

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default ProductsPage;