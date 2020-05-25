import React, { useContext } from 'react'
import './Home.css';

import DimensionContext from '../../context/dimension'

function Home() {
  const { width, height } = useContext(DimensionContext)

  return (
    <div className="Home">
      <h1>Tela Home</h1>
    </div>
  );
}

export default Home