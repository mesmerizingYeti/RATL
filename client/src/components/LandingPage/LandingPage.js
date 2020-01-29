import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import SearchIcon from '@material-ui/icons/Search'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


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
  card: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.header}><h3>Your efficient job search management tool</h3>
              <p> RATL effectively helps manage your job search by providing tools to keep track of your application process, stay in touch with hiring managers and never loose a beat with an overview of key dates on your calendar such as upcoming interviews and networking events.  </p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="./assets/Snake-Vector-Illustration.jpg"
                title="RATL snake"
              />
            </Card>
          </Grid>
        </Grid>
      </div>

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
          bgImage={require('./assets/female_job_hunt.jpg')}
          bgImageAlt="group"
          strength={200}
        >
          <div style={{ height: '400px' }} />
        </Parallax>
      </div>
    </>
  )
}


export default LandingPage