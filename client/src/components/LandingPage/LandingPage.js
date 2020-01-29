import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { makeStyles, Container } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import SearchIcon from '@material-ui/icons/Search'
// import 'typeface-roboto'
import snakeImage from './assets/Snake-Vector-Illustration.jpg'



const useStyles = makeStyles(theme => ({
  header: {
    color: "DB9A0D",
    backgroundColor: "FFFFFF",
    padding: "10px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.header}><h2>Your efficient job search management tool</h2>
              <p> RATL effectively helps manage your job search by providing tools to keep track of your application process, stay in touch with hiring managers and never loose a beat with an overview of key dates on your calendar such as upcoming interviews and networking events.  </p>
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
            <img src={snakeImage} alt="RATL Snake" />
          </Grid> */}
        </Grid>
      </div>

      <div>
        <Parallax
          blur={0}
          bgImage={require('./assets/Snake-Vector-Illustration.jpg')}
          bgImageAlt="group"
          strength={200}
        >
          <div style={{ height: '400px' }} />
        </Parallax>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}> <h4> Manage Connections </h4> <PermContactCalendarIcon />
              <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}> <h4> Calendar View </h4>  <TodayIcon />
              <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>  <h4> Job Leads </h4>   <LocationCityIcon />
              <p> Receive an overview of latest listings in your custom feed </p></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>  <h4> Company Insights </h4> <SearchIcon />
              <p> Be in-the-know and armed with relevant information about companies & organizations  </p></Paper>
          </Grid>

        </Grid>
      </div >
      <div>
        <Parallax
          blur={0}
          bgImage={require('./assets/Group-of-People.jpg')}
          bgImageAlt="group"
          strength={200}
        >
          <div style={{ height: '450px' }} />
        </Parallax>
      </div>

    </>
  )
}


export default LandingPage