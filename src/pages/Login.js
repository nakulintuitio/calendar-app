import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoggedIn, login } from "../features/auth/AuthSlice";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values:", values);
    dispatch(login(values));
    dispatch(isLoggedIn(true));
    navigate("/dashboard");
    // Add your login logic here
  };

  const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    ant-form-item-row {
        justify-content: space-between;
    }
    form {
      width: 400px;
      padding: 15px;
      border: 1px solid black;
      border-radius: 5px;
    }
  `;
  return (
    <LoginWrapper>
      <Form name="loginForm" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
         <Link to="/registration">Register</Link>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
