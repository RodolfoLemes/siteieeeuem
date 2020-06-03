import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'

import api from '../../utils/api'
import Header from '../../components/Header/Header'
import number2month from '../../utils/number2month.js'

import './Events.css';

function dateExists(date, events) {
  let data = new Date(date)
  let [day, month, year] = [data.getDate(), data.getMonth(), data.getFullYear()]

  let finds = events.filter(element => {
    let date = new Date(element.date)
    if(date.getFullYear() === year) {
      if(date.getMonth() === month) {
        if(date.getDate() === day) {
          return true
        }
      }
    }
    return false
  })

  if(finds) return finds
  else return undefined
}

function monthExists(date, events) {
  let data = new Date(date)
  let [month, year] = [data.getMonth(), data.getFullYear()]

  let finds = events.filter(element => {
    let date = new Date(element.date)
    if(date.getFullYear() === year) {
      if(date.getMonth() === month) {
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
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('event', {
        params: {
          filter: {
            date
          }
        }
      })
      setEvents(response.data)
    }

    fetchData()
  }, [date])

  function tileContent({ date, view }){ 
    var elements = dateExists(date, events)
    
    if(elements.length > 0){
      return (
        <React.Fragment >
          <div className='dotsView'>
            { elements.map((element, index) => <span key={index} className="dot" style={{ backgroundColor: colorDots[element.chapter] }}></span>) }
          </div>
        </React.Fragment>
      )
    }
  }

  function createDatesInfo() {
    var elements = monthExists(date, events)

    if(elements.length > 0){
      return (
        <React.Fragment>
            { elements.map((element, index) => (
              <div key={index} className='eventsCard' style={{ backgroundColor: colorDots[element.chapter] }}>
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
          onActiveStartDateChange={value => setDate(value.activeStartDate)}
        />
        <div className='eventsCardView'>
						{createDatesInfo()}
        </div>
      </div>
    </div>
  );
}

export default Events