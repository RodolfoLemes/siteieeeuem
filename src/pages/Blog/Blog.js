import React, { useRef } from 'react'

import { Chapters } from '../../constants/constants'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpansiveBlog from '../../components/ExpansiveBlog/ExpansiveBlog'

import './Blog.css';

function Blog() {
  const refIEEE = useRef()
  const refRAS = useRef()
  const refPES = useRef()
  const refCS = useRef()
  const refBIOENG = useRef()

  return (
    <div className="Blog">
      <Header />

      <div className='stickyButtons'>
        <button className='chapterButtons' style={{ backgroundColor: '#344EA9' }}>IEEE</button>
        <button className='chapterButtons' style={{ backgroundColor: '#FF647C' }}>RAS</button>
        <button className='chapterButtons' style={{ backgroundColor: '#45EA36' }}>PES</button>
        <button className='chapterButtons' style={{ backgroundColor: '#FFC34E' }}>CS</button>
        <button className='chapterButtons' style={{ backgroundColor: '#2D3142' }}>BIOENG</button>
      </div>

      <ExpansiveBlog
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