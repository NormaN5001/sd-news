import React from 'react'
import styled from 'styled-components'

const Footer = styled.section`
  background: linear-gradient(88.27deg, blueviolet 0%, violet 100%);
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 2vh;
    font-weight: bold;
    color: white;
  }
`

export default class FooterComponent extends React.Component{

  render(){
    return(
      <Footer>
        <p>Desenvolvido por: a</p>
      </Footer>
      )
  }
}