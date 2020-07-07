import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// A style sheet
const Nested = withStyles({
    root: {
        background: 'Green',
        width: 100,
        height: 50,
    }, // a style rule
    labelSpan: { background: 'Yellow' }, // a nested style rule
})(({ classes }) => (
    <button className={classes.root}>
        <span className={classes.labelSpan}>
            Span
      </span>
    </button>
));

function ParentWith() {
    return <Nested classes={{ label: 'my-label' }} />
}

export default ParentWith;