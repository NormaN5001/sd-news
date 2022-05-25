import React from 'react'
import styled from 'styled-components'

const Main = styled.section`
  margin: 100px 15vw 0 15vw;
  height: 130vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Topic = styled.div`
  background-color: white;
  width: 100%;
  height: 250px;
  border-radius: 5px;
`

export default class HeaderComponent extends React.Component{

  render(){
    return(
      <Main>
        <Topic>
        <p>Data</p>
        <h1>Título</h1>
        <p>Assunto</p>
        </Topic>

        <Topic>
        <p>Data</p>
        <h1>Título</h1>
        <p>Assunto</p>
        </Topic>

        <Topic>
        <p>Data</p>
        <h1>Título</h1>
        <p>Assunto</p>
        </Topic>

        <Topic>
        <p>Data</p>
        <h1>Título</h1>
        <p>Assunto</p>
        </Topic>
      </Main>
      )
  }
}