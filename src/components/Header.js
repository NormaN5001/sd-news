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

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`

export default class HeaderComponent extends React.Component{

  render(){
    return(
      <BackgroundHeader>
        <Header>
          <div>
            <LogoImg src={Logo} alt="Logo do site"/>
            <List>
              <Item>Notícia</Item>
              <Item>Paisagens</Item>
            </List>
          </div>
          <Input type="text" placeholder="Pesquisar no site"/>
        </Header>
      </BackgroundHeader>
      )
  }
}