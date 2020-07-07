import React from 'react';
import {makeStyles } from '@material-ui/core/styles';

// A style sheet
const useStyles = makeStyles({
    root: {
        background: 'Green',
        width: 100,
        height: 50,
    }, // a style rule
    label: { background: 'Blue' }, // a nested style rule
});

function Nested(props) {
    const classes = useStyles();
    return (
        <button className={classes.root}>
            <span className={classes.label}>
                Nested
    </span>
        </button>
    );
}

function Parent() {
    return <Nested />
}

export default Parent;