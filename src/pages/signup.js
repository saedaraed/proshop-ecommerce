import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/Login.module.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
// const schema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string().required('Password is required'),
// });

function Login() {
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const onSubmit = async (data) => {
    console.log(data);

    try {
        const response = await axios.put('https://prohop-express.herokuapp.com/api/users/signup', data);
        console.log('Response:', response.data);
        // Handle the response as needed
    } catch (error) {
        console.error('Error:', error);
        // Handle errors
    }
};

  return (
    <Row>
      <Col>
        <Container className="mt-5" fluid="md">
          <h3>Login</h3>
          <p>Login with your data that you entered during registration</p>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email" 
              />
              {/* {errors.email && <p className="text-danger">{errors.email.message}</p>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password" 
              />
              {/* {errors.password && <p className="text-danger">{errors.password.message}</p>} */}
            </Form.Group>

            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                Forgot your password?
              </a>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </Col>
      <Col className={styles.login}>ss s</Col>
    </Row>
  );
}

export default Login;