import Grid from "@material-ui/core/Grid";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";

const style = {
  grid: {
    margin: "0 -15px",
    width: "calc(100% + 30px)",
    '&:before,&:after':{
      display: 'table',
      content: '" "',
    },
    '&:after':{
      clear: 'both',
    }
  }
};

function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(style)(GridContainer);
