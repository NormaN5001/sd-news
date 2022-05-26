import React from 'react'
import { createGlobalStyle } from "styled-components"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: whitesmoke;
  }
`

export default class SdNews extends React.Component{

  render(){
    return(
      <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      </>
      )
  }
}

// #06E7FF azul
// 06E7FF rosa