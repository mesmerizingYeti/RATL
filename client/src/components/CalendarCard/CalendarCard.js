import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CalendarAPI from '../../utils/CalendarAPI'
import Calendar from '../Calender'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'

const { getAllReminders } = CalendarAPI


const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
    fontWeight: "bold",
  },
  para: {
    fontSize: "1.4em",
    color: "white",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  }
});


class CalendarCard extends React.Component {

  state = {

    calendarEvents: [ // initial event data
      {
        title: '',
        start: new Date()
      }
    ]
  }

  componentDidMount = () => {
    getAllReminders(localStorage.getItem('userAuth'))
      .then(({ data: calendars }) => {
        this.setState({
          calendarEvents: calendars
        })
      })
  }

  render() {

    let currEvent = this.state.calendarEvents
    return (
      <div>
        <Card >
          <CardContent >
            <List className="Card" style={{ maxHeight: 150, overflow: 'auto' }} >
              {
                currEvent.map(item =>
                  <ListItem>
                    <li>{item.title} on {moment(item.date).format('MMMM Do YYYY')}</li>
                  </ListItem>
                )
              }
            </List>
          </CardContent>
        </Card>
      </div>
    )

  }
}

export default CalendarCard