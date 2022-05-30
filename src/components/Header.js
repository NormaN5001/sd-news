import React from 'react'
import styled from 'styled-components'

import Logo from '../img/logo.png'
import Lupa from '../img/lupa.png'

const BackgroundHeader = styled.section`
  background: linear-gradient(88.27deg, blueviolet 0%, violet 100%);
  width: 100%;
`

const Header = styled.section`
  margin: 0 15vw 0 15vw;
  height: 250px;

  display: flex;
  flex-direction: column;
  @media(max-width: 768px){
    margin: 0 10vw 0 10vw;
  }
  @media(max-width: 425px){
    margin: 0 10px 0 10px;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 768px){
      justify-content: center;
    }
  }
`

const LogoImg = styled.img`
  width: 150px;
  cursor: pointer;
`
const Input = styled.input`
  padding-left: 70px;
  background: rgba(255, 255, 255, 0.2);
  background-image: url(${Lupa});
  background-repeat: no-repeat;
  background-position: 20px;

  border-style: none;
  outline: none;
  color: white;
  font-size: 2vh;

  border-radius: 5px;
  height: 65px;
  width: 100%;
  ::placeholder{
      color: #FFFFFF;
      font-size: 2vh;
      font-weight: 500;
   }
`
const List = styled.ul`
  display: flex;
  list-style: none;

  @media(max-width: 768px){
    position: absolute;
    top: 290px;
  }
`
const Item = styled.li`
  margin-left: 30px;
  text-transform: uppercase;
  font-size: 3vh;
  font-weight: 600;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover{
    cursor: pointer;
    text-decoration: underline 3px;
  }
  @media(max-width: 768px){
    background: linear-gradient(88.27deg, blueviolet 0%, violet 100%);
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 160px;
    border-radius: 50px;
  }
  &:hover{
    color: #181818;
    text-decoration: none;
  }
  @media(max-width: 425px){
    margin-left: 10px;
    font-size: 2vh;
    line-height: 30px;
    height: 30px;
    width: 130px;
  }
`


export default class HeaderComponent extends React.Component{
  render(){
    return(
      <BackgroundHeader>
        <Header>
          <div>
            <LogoImg src={Logo} alt="Logo do site"/>
            <List>
              <Item>Notícias</Item>
              <Item>Paisagens</Item>
            </List>
          </div>
          <Input type="text" placeholder="Pesquisar no site"/>
        </Header>
      </BackgroundHeader>
      )
  }
}