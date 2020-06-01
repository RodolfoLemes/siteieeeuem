import React, { useState } from 'react'
import Calendar from 'react-calendar'

import { events } from '../../constants/eventsDates'
import Header from '../../components/Header/Header'
import number2month from '../../utils/number2month.js'

import './Calendar.css';

function dateExists(date) {
  let data = new Date(date)
  let [day, month, year] = [data.getDate(), data.getMonth(), data.getFullYear()]

  let finds = events.filter(element => {
    if(element.date.getFullYear() === year) {
      if(element.date.getMonth() === month) {
        if(element.date.getDate() === day) {
          return true
        }
      }
    }
    return false
  })

  if(finds) return finds
  else return undefined
}

function monthExists(date) {
  let data = new Date(date)
  let [month, year] = [data.getMonth(), data.getFullYear()]

  let finds = events.filter(element => {
    if(element.date.getFullYear() === year) {
      if(element.date.getMonth() === month) {
        return true
      }
    }
    return false
  })

  if(finds) return finds
  else return undefined
}

const colorDots = {
  IEEE: "#344EA9",
  CS: "#FFC34E",
  RAS: "#FF647C",
  PES: "#45EA36",
  BIOENG: "#2D3142"
}

function Events() {
  const [date, setDate] = useState(new Date())
  
  function tileContent({ date, view }){ 
    var elements = dateExists(date)
    
    if(elements.length > 0){
      return (
        <React.Fragment >
          <div className='dotsView'>
            { elements.map((element, index) => <span key={index} className="dot" style={{ backgroundColor: colorDots[element.event] }}></span>) }
          </div>
        </React.Fragment>
      )
    }
  }

  function createDatesInfo() {
    var elements = monthExists(date)

    if(elements.length > 0){
      return (
        <React.Fragment>
            { elements.map((element, index) => (
              <div key={index} className='eventsCard' style={{ backgroundColor: colorDots[element.event] }}>
                <div className='eventsCardDate'>
                  <p className='eventsCardDateFont'>{new Date(element.date).getDate()}</p>
                  <p className='eventsCardDateFont'>{number2month(new Date(element.date).getMonth())}</p>
                </div>
                <div className='eventsCardText'>
                  <p className='eventsCardTextFont'>{element.description}</p>
                </div>
              </div>
            )) }
        </React.Fragment>
      )
    }
  }

  return (
    <div className="Events">
      <Header />
      <div className='eventsContainer'>
        <Calendar
          onChange={(data) => setDate(data)}
          value={date}
					tileContent={tileContent}
					next2Label={null}
					prev2Label={null}
          calendarType='US'
        />
        <div className='eventsCardView'>
						{createDatesInfo()}
        </div>
      </div>
    </div>
  );
}

export default Events