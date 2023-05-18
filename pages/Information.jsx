import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { TextField } from '@material-ui/core';


const Container = styled.div`
    background-color: #edf1f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 60px;
    padding-left: 60px;
    padding-bottom: 20px;

`;

const Column = styled.div`
    padding-top: 50px;
    display: block;

`;

const Heading = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #000064;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #000064;
    padding-bottom: 4px;
`;

const Button = styled.button`
    font-size: 12px;
    font-weight: 300;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;  
    display: block;
`;

const Sumbit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000064;
    color: #E6E3D3;
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
    width: 120px;
`;

const Information = () => {
  return (
    <div>
        <Container>
            <Column>
                <Heading>BEST SELLERS</Heading>
                <Button>Dark Circles Removal Cream</Button>
                <Button>Coffee For Face</Button>
                <Button>Lip Scrub At Home</Button>
                <Button>Perfume Gift Set For Men</Button>
                <Button>Perfume Gift Set For Women</Button>
            </Column>
            
            <Column>
                <Heading>INFORMATION</Heading>
                <Button>Blogs</Button>
                <Button>Newsroom</Button>
                <Button>Terms & Conditions</Button>
                <Button>Privacy Policy</Button>
                <Button>Refund and Return</Button>
                <Button>Shipping Policy</Button>
                <Button>Bulk Order - GST Invoice</Button>
            </Column>
            
            <Column>
                <Heading>SUPPORT</Heading>
                <Button>About Us</Button>
                <Button>Contact Us</Button>
                <Button>Order Tracking</Button>
                <Button>All Products</Button>
                <Button>FAQ</Button>
                <Button>Sitemap</Button>
            </Column>
            
            <Column>
                <Heading>CONTACT US</Heading>
                <Image src="/images/location.png" width='250' height='200'/>
                
            </Column>
            
            <Column>
                <Heading>OUR NEWSLETTER</Heading>
                <Image src="/images/newslettern.png" width='250' height='200'/>
                <TextField variant='outlined' label='Enter Your Email' size='small'></TextField>
                <Sumbit>SUBMIT</Sumbit>
            </Column>
            
            <Column>
            
            </Column>
        </Container>
    </div>
  )
}

export default Information
