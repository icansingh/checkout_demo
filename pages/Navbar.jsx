import { FavoriteBorderOutlined, Search } from '@material-ui/icons';
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Badge, Button, ButtonGroup } from '@material-ui/core';
 
const Container = styled.div`
    height: 100%;
    background-color: #fff;
    position: sticky;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const Account = styled.div`
    padding-left: 35px;
    
`;

const Center = styled.div`
    flex: 1;

`;

const Logo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    position: relative;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray; 
    padding: 5px;
    border-radius: 15px;
`;

const Input = styled.input`
     border: none;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
`;

const Pages = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
`;

const Navbar = () => {
    return (
    <Container>
       <Wrapper>
            <Left>
                <Account><Image src="/images/Account.png" alt="" width="35" height="35"/> </Account>
            </Left>
            <Center>
                <Logo><Image src="/images/Logo.png" alt="" width="175" height="100"/></Logo>
            </Center>
            <Right>
                <SearchContainer>
                    <Input/>
                    <Search/>
                </SearchContainer>
                <MenuItem>
                    <Badge badgeContent={0} color="secondary" showZero anchorOrigin={{vertical: 'bottom',horizontal: 'right',}}>
                        <ShoppingBagOutlined/>
                    </Badge>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={0} color="secondary" showZero anchorOrigin={{vertical: 'bottom',horizontal: 'right',}}>
                        <FavoriteBorderOutlined/>
                    </Badge>
                </MenuItem>
            </Right> 
       </Wrapper>
       <Wrapper>
        <Pages>
            <ButtonGroup variant="text" aria-label="small text button group">
                <Button>Crazy Deals</Button>
                <Button>Bestsellers</Button>
                <Button>Shop All</Button>
                <Button>Perfumes</Button>
                <Button>New Arrivals</Button>
                <Button>Skin Care</Button>
                <Button>Cosmetics</Button>
                <Button>Body Care</Button>
                <Button>Combos & Gifts</Button>
            </ButtonGroup>
        </Pages>
       
       </Wrapper>
    </Container>
    )
}
 
export default Navbar
 