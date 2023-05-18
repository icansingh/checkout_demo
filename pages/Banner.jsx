import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    background-color: #fff;
    border-bottom: 2px solid #eee;
    
`;

const Picture = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`;


const Banner = () => {
  return (
    <div>
        <Container>
            <Picture>
                <Image src="/images/banner.png" width='1200' height='400' />
            </Picture>
            <Picture>
                <Image src="/images/steps.png" width='320' height='100' />
            </Picture>
        </Container>
    </div>
  )
}

export default Banner
