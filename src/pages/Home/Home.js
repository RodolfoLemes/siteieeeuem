import React, { useContext } from 'react'

// Solução inicial para ter projetos e feitos na pagina home
import { Dones, Projects } from '../../constants/constants'
import Header from '../../components/Header/Header'
import DimensionContext from '../../context/dimension'
import './Home.css'

function Home() {
  const { width, height } = useContext(DimensionContext)

  return (
    <div className='container' style={{ height: height, width: width }}>
      <Header />
    </div>
  );
}

export default Home

