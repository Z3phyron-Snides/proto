import React from "react";
import Shape from "./Shape";

function App() {
  return (
    <div>
      <Shape animation="bounce" shape="circle" size={100} color="#333" />
      <Shape animation="fade-in" shape="square" size={75} color="#777" />
      <Shape animation="rotate" shape="circle" size={50} color="#999" />
    </div>
  );
}

export default App;
