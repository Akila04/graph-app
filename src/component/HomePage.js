import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Recharts from './Recharts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      width: '70%',
      backgroundColor: '#DCDCDC'
    },
    textField: {
        width: '20%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  }));

const Homepage = () => {
    const classes = useStyles();
    const [year, setYear] = useState();
    const [value, setValue] = useState('');

    const changeHandler = (event) => {
        console.log(event.target.value);
        setYear(event.target.value);
    }

    const clickHandler = () => {
        setValue(year);
    }

    return(
        <div style={{width: '100%', flexGrow: '1'}}>
            <h1>Demo Report</h1>
            <div className={classes.textField}>
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Enter Year"
                    fullWidth
                    margin="normal"
                    value={year}
                    onChange = {changeHandler}
                    type= 'number'
                />
                <Button variant="contained" color="primary" onClick={clickHandler}>Click Me</Button>
            </div>
            <Grid container spacing={3}>
            <Grid item xs={12} >
            {(value !== '' && value !== undefined) && 
            <Paper className={classes.paper} 
                style={{
                    height: 'fit-content', margin: '10px' ,marginLeft: 'auto', marginRight: 'auto'}}>
               <Recharts value={value}/>
            </Paper>
            }
            </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;