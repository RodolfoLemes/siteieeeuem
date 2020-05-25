import React, { useState } from 'react'
import { Button } from '@material-ui/core';

import './Home.css';
import Header from '../../components/Header/Header'

const height = window.innerHeight;
const width = window.innerWidth;

function Home() {

  return (
    <div className='container' style={{ height: height, width: width }}>
      <Header />
    </div>
  );
}

export default Home

