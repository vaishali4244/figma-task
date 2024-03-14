import React from 'react';

const Demo = () => {
  return (
    <div className='demo-container'>
      <p className='p-main'>Lorem ipsum dolor sit amet  </p>
      <p className='p-main'> consectetuer </p>
      <button className="nav-opt nav-btn">  Get a Demo  <img className='nav-img' src={require("../assets/images/Right.png")} alt="" /></button>
    </div>
  )
}

export default Demo;
