import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TabbyTabs from './tabTastic';
import Header from './Header';
import InputsComponent from './Inputs';

/**
 * The first thing to look at is a ----props interface!---- this is defined for each component you pass props to! 
 * This delcares the shape of the object and the types associated with it 
 * You must also declare an interface for the STATE of class components
 */

function MadeWithLove() {
  return (
    <Typography variant="body1" color="textPrimary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Things here thanks
      </Link>
      {' Brap.'}
    </Typography>
  );
}

const App: React.FC = () => {
  return (    
    <Container maxWidth="sm">
      <TabbyTabs />
      <Header name="BOABY"/>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Do things with react wooo
      </Typography>      
      <MadeWithLove />
      <InputsComponent />
    </Box>
  </Container>
  );
}

export default App;
