import React, { useContext, useState } from 'react'
import Iframe from 'react-iframe'

import DimensionContext from '../../context/dimension'
import Header from '../../components/Header/Header'
import './Archives.css';

const folderId = {
  IEEE: '12uNwKsVt9xyZyhvfoR_-DUKni2J5wmb7',
  CS: '1TbqF3fO23qymPhipZ7lO16O66RLVo3hJ',
  RAS: '18Knj-qZaMlQ_Q_2Fq_7k4CM8PKVyNO8L',
  PES: '1m3hLfFV7nlFJdSOc_6LMZRXa9N5kfhoS',
  BIOENG: '1ao0bsQ7BIci-NperbsLRVoU7ZC4f4fPo'
}

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