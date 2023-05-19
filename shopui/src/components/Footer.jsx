import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {mobile} from '../Responsive'


const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#ece3e3"})}
`;

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment=styled.img`
    width: 50%;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHEIKH.</Logo>
        <Desc>
          Thank you for visiting our online store! We are dedicated to providing
          you with a seamless shopping experience. Browse through our wide range
          of products and find the perfect items to suit your needs. Happy shopping!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>


            </List>

      </Center>
      <Right>
            <Title>Contact</Title>
            <ContactItem>
              <LocationOnIcon style={{marginRight:"10px"}}/>  622, DIxie PAth, South carolina East USA
            </ContactItem>
            <ContactItem >
               <LocalPhoneIcon style={{marginRight:"10px"}}/> +1 435 454 3535
            </ContactItem>

            <ContactItem >
                <MailIcon style={{marginRight:"10px"}}/> contach@sheikh.dev.com
            </ContactItem>
            <Payment src="https://n1gloves.com/img/cms/pagos_1.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
