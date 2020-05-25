import React from 'react'
import { Button } from '@material-ui/core';
import { ShoppingCart, AccountCircle } from '@material-ui/icons';

import './Header.css';

const height = window.innerHeight;
const width = window.innerWidth;

function Header() {

  return (
      <header className='headerView' style={{ height: height/8, width: width }}>
        <div>
          <img src={require('../../assets/headerLogo.png')} style={{ height: width/16, width: width/16 }}/>
        </div>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80 }}>
          <p className='textBtn' style={{ fontSize: height/50 }}>HOME</p>
        </Button>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80 }}>
          <p className='textBtn' style={{ fontSize: height/50 }}>EVENTOS</p>
        </Button>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80 }}>
          <p className='textBtn' style={{ fontSize: height/50 }}>LOJA</p>
        </Button>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80 }}>
          <p className='textBtn' style={{ fontSize: height/50 }}>BLOG</p>
        </Button>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80 }}>
          <p className='textBtn' style={{ fontSize: height/50 }}>ARQUIVOS</p>
        </Button>
        <Button style={{ height: height/20, flex: 1, marginLeft: width/80, borderRadius: height/20, backgroundColor: '#292E56' }}>
          <p className='textBtn' style={{ fontSize: height/50, color: "#ffffff" }}> CONTATO </p>
        </Button>
        <div className='headerRight' style={{ height: height/8, flex: 5, marginRight: width/80 }}>
          <Button>
            <ShoppingCart style={{ height: height/25, width: height/25 }}/>
          </Button>
          <Button>
            <AccountCircle style={{ height: height/25, width: height/25 }}/>
          </Button>
        </div>
      </header>
  );
}

export default Header

