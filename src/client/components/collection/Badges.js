import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import {
  Favorite,
  Visibility,
  Email,
  Facebook,
  Twitter,
} from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  badges: {
    '& > *': {
      marginRight: theme.spacing(3),
    },
  },
  root: {
    marginBottom: theme.spacing(),
  },
  cell: {
    display: 'flex',
  },
}));

function Badges({ views, likes, rating }) {
  const classes = useStyles();

  const { count, value } = rating;

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={6}
        className={classes.cell}
        justify="flex-start"
        alignItems="center"
      >
        <div className={classes.badges}>
          <Badge badgeContent={count} color="secondary" max={999}>
            <Rating value={value} />
          </Badge>
          <Badge badgeContent={likes} color="secondary" max={999}>
            <Favorite color="primary" />
          </Badge>
          <Badge badgeContent={views} color="secondary" max={999}>
            <Visibility color="primary" />
          </Badge>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        className={classes.cell}
        justify="flex-end"
        alignItems="center"
      >
        <IconButton color="primary">
          <Facebook />
        </IconButton>
        <IconButton color="primary">
          <Twitter />
        </IconButton>
        <IconButton color="primary">
          <Email />
        </IconButton>
      </Grid>
    </Grid>
  );
}

Badges.propTypes = {
  views: PropTypes.number,
  likes: PropTypes.number,
  rating: PropTypes.shape({
    count: PropTypes.number,
    value: PropTypes.number,
  }),
};

Badges.defaultProps = {
  views: 0,
  likes: 0,
  rating: {
    count: 0,
    value: 0,
  },
};

export default Badges;