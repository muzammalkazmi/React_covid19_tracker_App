import React from 'react'
import{Card,CardContent,Typography,Grid} from '@material-ui/core'
export const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{confirmed.value} </Typography>
                        <Typography color='textSecondary' gutterBottom>Real Data </Typography>
                        <Typography color='textSecondary' gutterBottom>Total No of infected People </Typography>
                        <Typography color='textSecondary' gutterBottom>Last Updated </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{recovered.value} </Typography>
                        <Typography color='textSecondary' gutterBottom>Real Data </Typography>
                        <Typography color='textSecondary' gutterBottom>Total No of Recovered People </Typography>
                        <Typography color='textSecondary' gutterBottom>Last Updated </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{deaths.value}</Typography>
                        <Typography color='textSecondary' gutterBottom>Real Data </Typography>
                        <Typography color='textSecondary' gutterBottom>Total No of Deaths </Typography>
                        <Typography color='textSecondary' gutterBottom>Last Updated </Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}
