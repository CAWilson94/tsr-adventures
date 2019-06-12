import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

interface TabTasticProps { 
    children?: React.ReactNode; //wtf is a react node
}

function TabTasticContainer(props: TabTasticProps){ 
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabTasticContainer.propTypes = {
    children: PropTypes.node.isRequired, // wits this whole thing for?
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow:1, 
            backgroundColor: theme.palette.background.paper,
        },
    }),    
);

export default function TabbyTabs(){ 
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number){
        setValue(newValue);
    }

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Cute Photos Here" />
                    <Tab label="Ugly Photos Here" />
                    <Tab label="Food Photos Here" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabTasticContainer> Cute Photos Here </TabTasticContainer>}
            {value === 1 && <TabTasticContainer> Ugly Photos Here </TabTasticContainer>}
            {value === 2 && <TabTasticContainer> Food Photos Here </TabTasticContainer>}
        </div>
    )
}