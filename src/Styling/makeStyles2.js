import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// A style sheet
const useStyles = makeStyles({
    root: {
        background: 'Green',
        width: 100,
        height: 50,
    }, // a style rule
    label: {}, // a nested style rule
});

function Nested(props) {

    const classes = useStyles(props);
    return (
        <button className={classes.root}>
            <span className={classes.label}>
               Span
        </span>
        </button>
    );
}

function Parent2() {
    return <Nested classes={{ label: 'my-label' }} />
}
export default Parent2;