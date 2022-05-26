import React from 'react'
import styled from 'styled-components'

const Main = styled.section`
  margin: 70px 15vw 0 15vw;
  height: 130vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Topic = styled.div`
  background-color: white;
  width: 100%;
  height: 220px;
  border-radius: 5px;

  p{
    margin: 20px;
    color: #717171;
    font-size: 1.7vh;
  }
  h2{
    margin: 20px;
    color: #1A202C;
    font-size: 2.5vh;
  }
`

export default class MainComponent extends React.Component{

  render(){
    return(
      <Main>
        <Topic>
        <p>26 de maio, 2022</p>
        <h2>Título da notícia.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
        </Topic>

        <Topic>
        <p>26 de maio, 2022</p>
        <h2>Título</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
        </Topic>

        <Topic>
        <p>26 de maio, 2022</p>
        <h2>Título</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
        </Topic>

        <Topic>
        <p>26 de maio, 2022</p>
        <h2>Título</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
        </Topic>
      </Main>
      )
  }
}