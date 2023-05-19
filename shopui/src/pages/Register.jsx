import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container=styled.div`

  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg?auto=compress&cs=tinysrgb&w=1600");
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper=styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  ${mobile({width:"75%"})}

`
const Form=styled.form`
  display: flex;
  flex-wrap: wrap;

`
const Title=styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`
const Input=styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement=styled.span`
  font-size: 15px;
  margin: 20px 0px;

`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
&:hover{
  background-color: darkgray;
}

`






const Register = () => {
  return (
    
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Agreement>
            By creating an account,I consent to the processing of my personal data in accordance wth the <b>PRIVACY PPOLICY</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register