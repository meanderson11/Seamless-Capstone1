import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


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
} from "./RegistrationElements";

 const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();
   

    const register = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:5001/auth/register", { name, email, password })
        .then((res) => {
          console.log(res.data)
          navigate("/SignIn");
        })
        .catch((error) => {
          alert(error, "Could not register a user at this time");
        });
    };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Seamless Solutions</Icon>
          <FormContent>
            <Form onSubmit={register}>
            <FormH1>Greeting and Welcome to seamless solutions!</FormH1>
            <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput value={name} onChange={(e) => setName(e.target.value)} type='name' placeholder="name" id="name" name="name" />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput value={password} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder="************" id="password" name="password" />
              <FormLabel htmlFor="label">Confirm Password</FormLabel>
              <FormButton type="submit">Submit</FormButton>
              <Link to="/signin">
              <Text>Already have an account? Login here.</Text>
              </Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Registration;