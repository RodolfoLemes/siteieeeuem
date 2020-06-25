import React, { useContext, useState } from 'react'
import Iframe from 'react-iframe'

import DimensionContext from '../../context/dimension'
import Header from '../../components/Header/Header'
import { folderId } from '../../constants/urls'
import './Archives.css';

const color = {
  IEEE: "#344EA9",
  CS: "#FFC34E",
  RAS: "#FF647C",
  PES: "#45EA36",
  BIOENG: "#2D3142"
}

function Archives() {
  const { width, height } = useContext(DimensionContext)

  const [folder, setFolder] = useState('IEEE')

  return (
    <div className="Archives">
      <Header />

      <div className='stickyButtonsArchives'>
        <button 
          onClick={() => setFolder('IEEE')} 
          className={ folder === 'IEEE' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' } 
          style={{ backgroundColor: '#344EA9' }}>IEEE</button>
        <button 
          onClick={() => setFolder('RAS')} 
          className={ folder === 'RAS' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' } 
          style={{ backgroundColor: '#FF647C' }}>RAS</button>
        <button 
          onClick={() => setFolder('PES')} 
          className={ folder === 'PES' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' } 
          style={{ backgroundColor: '#45EA36' }}>PES</button>
        <button 
          onClick={() => setFolder('CS')} 
          className={ folder === 'CS' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' } 
          style={{ backgroundColor: '#FFC34E' }}>CS</button>
        <button 
          onClick={() => setFolder('BIOENG')} 
          className={ folder === 'BIOENG' ? 'chapterButtonsSelected' : 'chapterButtonsUnselected' } 
          style={{ backgroundColor: '#2D3142' }}>BIOENG</button>
      </div>

      <div className='iframeContainer' style={{ backgroundColor: color[folder] }}>
        <div className='iframeContainerChildren'>
          <Iframe 
            src={`https://drive.google.com/embeddedfolderview?id=${folderId[folder]}#list`}
            height={height*0.58}
            width={width*0.88}
            frameBorder="0"
          />
        </div>
      </div>
    
    </div>
  );
}

export default Archives