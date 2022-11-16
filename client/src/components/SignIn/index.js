import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from "./SigninElements";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    const signin = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:5001/auth/signin", { email, password })
        .then((res) => {
          navigate("/dashboard");
        })
        .catch((error) => {
          alert("Could not register a user at this time");
        });
    };


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Seamless Solutions</Icon>
          <FormContent>
            <Form onSubmit={signin}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput value={password} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder="************" id="password" name="password" />
              <FormButton type="submit">Submit</FormButton>
              <Link to="/registration">
              <Text>Don't have an account? Register here.</Text>
              </Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
    );
 }

export default SignIn;