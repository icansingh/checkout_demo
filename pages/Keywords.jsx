import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';


const Container = styled.div`
    background-color: #edf1f7;
    padding-top: 5px;
    padding-left: 60px;
    padding-bottom: 50px;
`;

const Heading = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #000064;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #000064;
    padding-bottom: 4px;
    width: 250px;
`;



const Keywords = () => {
  return (
    <div>
        <Container>
            <Heading>MOST SEARCHED KEYWORDS</Heading>
            <Image src="/images/keywordsn.png" width={1200} height={300} />
        </Container>
    </div>
  )
}

export default Keywords
