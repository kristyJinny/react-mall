import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginUser = (event) => {
    event.preventDefault(); // 로그인 버튼 클릭 후, 다시 새로고침 안 함

    dispatch(authenticateAction.login(id, password));
    //console.log("login user function issue");
    //setAuthenticate(true);
    navigate("/"); // 로그인 버튼 클릭 후, 메인 화면으로 이동~
  };

  // const navigate = useNavigate();
  // const login = (event) => {
  //   event.preventDefault();
  //   setAuthenticate(true);
  //   navigate("/");
  // };

  return (
    <Container className="login-container">
      <Form className="login-form" onSubmit={(event) => LoginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setId(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

/*
  button  type="submit" 일때,
  form 에서 onSubmit={login} // onSubmit 이라는 이벤트~~! (주의, onClick 아님)

  로그인 버튼 클릭 후, 페이지를 다시 새로고침 하니깐,
  그래서, form 이 리프레시 하는 것을 막아줘야 함
  즉, form 사용 시, event.preventDefault(); 사용해주기
  그러면, 로그인 버튼 클릭 후, 다시 새로고침 안 함
*/
