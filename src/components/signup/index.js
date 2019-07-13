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

class Signup extends React.Component {
    state = {
        open: false,
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>Super Secret Password</DialogTitle>
                    <DialogContent>
                        <DialogContentText>1-2-3-4-5</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleClose}>
                            OK
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    open: state.signupDialog.isOpen
  })

export const SignUpDialog = connect(mapStateToProps)(Signup);

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TopBar));