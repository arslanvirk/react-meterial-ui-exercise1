import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Parent from '../../Styling/makeStyles';
import ParentWith from "../../Styling/withStyles";
import Parent2 from "../../Styling/makeStyles2";
import ImgMediaCard from '../Surfaces/Cards-Media';
import SimpleAccordion from '../Surfaces/accordion';

function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <Parent />
          <br />
          <ParentWith />
          <br />
          <Parent2 />
          <br/>
          <br/>
          <ImgMediaCard/>
          <br/>
          <SimpleAccordion/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default FixedContainer;