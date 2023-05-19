import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Annouce from '../components/Annouce'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import { useLocation } from 'react-router-dom'

const Container=styled.div``
const Title=styled.h1`
    margin: 20px;
    text-align: center;
    font-weight: bold;
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}

`
const Filter=styled.div`
    margin: 20px;
`
const FilterText=styled.span`
    
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({margin:"0px"})}
`

const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`
const Option=styled.option`
    
`


const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split("/")[2]
    const [filter,setFilter]=useState({})
    const [sort,setSort]=useState("newsest")
    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilter({
            ... filter,
            [e.target.name]:value,
        })
    }
    console.log(filter)
  return (
   <Container>
    <Annouce/>
    <Navbar/>
    <Title>{cat}</Title>
    <FilterContainer>
        <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="color" onChange={handleFilters}>
                <Option disabled >Color</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>orange</Option>
                <Option>grey</Option>
                <Option>pink</Option>
            </Select>
            <Select name='size' onChange={handleFilters}>
                <Option disabled selected>Size</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
        
        </Filter>
        <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price(Asc)</Option>
                <Option value="desc">Price(Des)</Option>
            </Select>
        </Filter>
    </FilterContainer>
    <Products cat={cat} filter={filter} sort={sort}/>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default ProductList