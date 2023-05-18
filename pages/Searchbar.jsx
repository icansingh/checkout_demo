import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const SearchContainer = styled.div`
    border: 2px solid lightgray; 
    padding: 5px;
    border-radius: 15px;
`;

const Input = styled.input`
     border: none;
`;

const Searchbar = () => {
  return (
    <div>
        <Container>
          <SearchContainer>
            <Search/>
            <Input/>
            <ClearRoundedIcon/>
          </SearchContainer>
        </Container>
    </div>
  )
}

export default Searchbar
