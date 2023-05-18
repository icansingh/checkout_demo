import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import { Button } from '@material-ui/core';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 110px;
  padding-left: 110px;
  padding-bottom: 20px;
`;

const Product = styled.div`
  border: 1px solid #eee;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
`;

const ProductImage = styled.div`
  padding-bottom: 16px;
`;

const ProductName = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 16px;
`;

const ProductInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 14px;
`;

const ProductRating = styled.div`
  display: flex;
  padding-left: 0px;
  padding-bottom: 10px;
`;

const RatingValue = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 2px;
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000064;
  color: #E6E3D3;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
`;

const Products = () => {
  return (
    <div>
      <Container>
        <Product>
          <ProductImage><Image src='/images/Box1.webp' width='225' height='225'/></ProductImage>
          <ProductName>YOU'RE AMAZING BOX</ProductName>
          <ProductInfo>Free Gift Box</ProductInfo>
          <ProductRating><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><RatingValue>5</RatingValue></ProductRating>
          <AddToCart>ADD TO BOX</AddToCart>
        </Product>

        <Product>
          <ProductImage><Image src='/images/Box2.webp' width='225' height='225'/></ProductImage>
          <ProductName>CONGRATULATION BOX</ProductName>
          <ProductInfo>Free Gift Box</ProductInfo>
          <ProductRating><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><RatingValue>5</RatingValue></ProductRating>
          <AddToCart>ADD TO BOX</AddToCart>
        </Product>

        <Product>
          <ProductImage><Image src='/images/Box3.webp' width='225' height='225'/></ProductImage>
          <ProductName>LOVE BOX</ProductName>
          <ProductInfo>Free Gift Box</ProductInfo>
          <ProductRating><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><RatingValue>5</RatingValue></ProductRating>
          <AddToCart>ADD TO BOX</AddToCart>
        </Product>

        <Product>
          <ProductImage><Image src='/images/Box4.webp' width='225' height='225'/></ProductImage>
          <ProductName>BEST WISHES BOX</ProductName>
          <ProductInfo>Free Gift Box</ProductInfo>
          <ProductRating><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><GradeRoundedIcon/><RatingValue>5</RatingValue></ProductRating>
          <AddToCart>ADD TO BOX</AddToCart>
        </Product>
      </Container>
    </div>
  )
}

export default Products
