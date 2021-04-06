import React from "react";
import CountUp from "react-countup";
import cx from 'classnames'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
function cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return ".....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent  className={styles.infected}>
            <Typography color="textSecondary" gutterBottom>
              Infect
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent className={styles.recovered}>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent className={styles.deaths}>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Deaths cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default cards;
