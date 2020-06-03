import React from 'react'

import { Chapters } from '../../constants/constants'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpansiveBlog from '../../components/ExpansiveBlog/ExpansiveBlog'

import './Blog.css';

function Blog() {
  return (
    <div className="Blog">
      <Header />

      <ExpansiveBlog 
        nameItens='IEEE'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog 
        nameItens='RAS'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog 
        nameItens='PES'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog 
        nameItens='CS'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />
      <ExpansiveBlog 
        nameItens='BIOENG'
        itens={Chapters}
        itensPerLine={2}
        itensWithoutExpansive={4}
      />


      

      <Footer />
    </div>
  );
}

export default Blog