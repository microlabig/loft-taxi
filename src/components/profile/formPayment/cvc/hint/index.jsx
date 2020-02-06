import React from "react";
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tooltip  } from "@material-ui/core";
//import './styles.scss';

const useStyles = makeStyles(theme => ({
    customArrow: {
        color: '#ccc'
    },
    customTooltip: {
        color: 'black',
        width: 195,
        textAlign: 'center',
        padding: '15px 20px',
        backgroundColor: 'white',
        border: '1px solid #ccc'
    }
}));

const Hint = ({ children, textHint }) => {
    const classes = useStyles();

    return (
        <Tooltip 
            arrow 
            title={textHint} 
            className="form__hint"
            classes={{ 
                tooltip: classes.customTooltip,
                arrow: classes.customArrow
             }}
            enterDelay={50} leaveDelay={200}
        >
            {children}
        </Tooltip>
    );
}

Hint.defaultProps = {
    children: null, 
    textHint: ''
}

Hint.propTypes = {
    children: PropTypes.node.isRequired, 
    textHint: PropTypes.string.isRequired
}

export default Hint;