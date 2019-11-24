import React, { useState } from 'react'


const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld() {
  const [count, setCount] =useState(1);
    const counHandle = () => {
      setCount(count+1);
    }
   
  return (
    // <div className="docMainWrapper wrapper">
    //   <Container className="mainContainer documentContainer postContainer">
    //     <h1>Hello World!</h1>
    //     <p>This is my first pag</p>
    //     <h1>{count}</h1>
    //     <button onClick = {counHandle}>Click me</button>
    //   </Container>
    // </div>
    <div>
      <h1>{count}</h1>
      <button onClick={counHandle}>Click</button>
    </div>
  );
}

module.exports = HelloWorld;
