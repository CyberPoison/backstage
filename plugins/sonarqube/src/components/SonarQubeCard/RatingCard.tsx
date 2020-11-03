/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

const useStyles = makeStyles(theme => {
  return {
    root: {
      margin: theme.spacing(1, 0),
    },
    upper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      textAlign: 'center',
    },
    wrapIcon: {
      display: 'inline-flex',
      verticalAlign: 'baseline',
    },
    left: {
      display: 'flex',
    },
    right: {
      display: 'flex',
      marginLeft: theme.spacing(0.5),
    },
  };
});

export const RatingCard = ({
  leftSlot,
  rightSlot,
  title,
  titleIcon,
}: {
  leftSlot: ReactNode;
  rightSlot: ReactNode;
  title: string;
  titleIcon?: ReactNode;
}) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid item className={classes.upper}>
        <Grid item className={classes.left}>
          {leftSlot}
        </Grid>
        <Grid item className={classes.right}>
          {rightSlot}
        </Grid>
      </Grid>
      <Grid item className={classes.cardTitle}>
        <Typography variant="body1" className={classes.wrapIcon}>
          {titleIcon} {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
