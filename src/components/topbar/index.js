import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';
import { openSignup } from '../../actions';
import { connect } from 'react-redux';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopBar extends React.Component {
  state = {
    open: false,
  };

  constructor(props) {
    super(props);
  }
  showSignupModal = () => {
    this.props.dispatch(openSignup);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cup of Sugar
            </Typography>
            <Button color="inherit" onClick={this.showSignupModal}>Sign Up</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});
export const topBar = connect(mapStateToProps)(TopBar);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(TopBar));