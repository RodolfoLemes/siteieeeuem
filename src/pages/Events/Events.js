import React, { useState } from 'react'
import Calendar from 'react-calendar'
//import { Modal } from '@material-ui/core'

import { events } from '../../constants/eventsDates'
import Header from '../../components/Header/Header'
import './Events.css';
import 'react-calendar/dist/Calendar.css';

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

const colorDots = {
  IEEE: "#0000ff",
  CS: "#ffff00",
  RAS: "#ff0000",
  PES: "#00ff00",
}

function Events() {
  const [date, setDate] = useState(new Date())

  function tileContent({ date, view }){ 
    var elements = dateExists(date)

    if(elements.length > 0){
      return (
        <span className="dot" style={{ backgroundColor: colorDots[elements[0].event] }}></span>
      )
    }
  }

  return (
    <div className="Events">
      <Header />
      <Calendar
        onChange={(data) => setDate(data)}
        value={date}
        tileContent={tileContent}
      />
      
    </div>
  );
}

export default Events