import React, { useRef, useState, useEffect } from 'react'

import { Chapters } from '../../constants/constants'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpansiveBlog from '../../components/ExpansiveBlog/ExpansiveBlog'

import './Blog.css';

function Blog() {

  const [folder, setFolder] = useState('IEEE')
  const handleScroll = (event) => {
      const position = window.pageYOffset;

      if(position >= 1 && position <= 500) {
        setFolder('IEEE')
      } else if(position > 500 && position <= 1351) {
        setFolder('RAS')
      } else if(position > 1351 && position <= 2152) {
        setFolder('PES')
      } else if(position > 2152 && position <= 2860) {
        setFolder('CS')
      } else if(position > 2860) {
        setFolder('BIOENG')
      }

  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const refIEEE = useRef()
  const refRAS = useRef()
  const refPES = useRef()
  const refCS = useRef()
  const refBIOENG = useRef()

  return (
    <div className="Blog">
      <Header />

      <div className='stickyButtons'>
        <button 
          onClick={() => { refIEEE.current.scrollIntoView({ behavior: 'smooth' }); setFolder('IEEE') }} 
          className={ folder === 'IEEE' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' }  
          style={{ backgroundColor: '#344EA9' }}>IEEE</button>
        <button 
          onClick={() => { refRAS.current.scrollIntoView({ behavior: 'smooth' }); setFolder('RAS') }} 
          className={ folder === 'RAS' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' }  
          style={{ backgroundColor: '#FF647C' }}>RAS</button>
        <button 
          onClick={() => { refPES.current.scrollIntoView({ behavior: 'smooth' }); setFolder('PES') }} 
          className={ folder === 'PES' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' }  
          style={{ backgroundColor: '#45EA36' }}>PES</button>
        <button 
          onClick={() => { refCS.current.scrollIntoView({ behavior: 'smooth' }); setFolder('CS') }} 
          className={ folder === 'CS' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' }  
          style={{ backgroundColor: '#FFC34E' }}>CS</button>
        <button 
          onClick={() => { refBIOENG.current.scrollIntoView({ behavior: 'smooth' }); setFolder('BIOENG') }} 
          className={ folder === 'BIOENG' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' }  
          style={{ backgroundColor: '#2D3142' }}>BIOENG</button>
      </div>

      <ExpansiveBlog
        ref={refIEEE}
        nameItens='IEEE'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog
        ref={refRAS}
        nameItens='RAS'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog
        ref={refPES}
        nameItens='PES'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog
        ref={refCS}
        nameItens='CS'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog
        ref={refBIOENG}
        nameItens='BIOENG'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />

      <Footer
        blogPage={true}
      />
    </div>
  );
}

export default Blog