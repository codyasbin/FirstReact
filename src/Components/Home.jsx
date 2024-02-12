import React, { useState } from "react";
import Container from './Container'
import TextEditor from './TextEditor'

const Home = () => {
  const [stylee, setStylee] = useState({});
  return (
    <>
    
    <div>
      <Container stylee={stylee} setStylee={setStylee} />
      <TextEditor stylee={stylee} setStylee={setStylee} />
    </div>
    
    </>
  );
}

export default Home;
