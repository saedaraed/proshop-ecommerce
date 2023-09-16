import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "@/styles/Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Add your login logic here
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://prohop-express.herokuapp.com/api/users/login",
        {
          username,
          password,
        }
      );
      console.log(response, "response");
      if (response.status === 200) {
        setMessage("Login successful");
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("Login failed");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <Row>
      <Col>
        <Container className="mt-5" fluid="md">
          <h3>Login</h3>
          <p>Login with your data that you entered during registration</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* {errors.email && <p className="text-danger">{errors.email.message}</p>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && <p className="text-danger">{errors.password.message}</p>} */}
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                Forgot your password?
              </a>
            </Form.Group>
            <Button
              className="w-100"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
            <p>{message} ss</p>
          </Form>
        </Container>
      </Col>
      <Col className={styles.login}>ss s</Col>
    </Row>
  );
}

export default Login;
