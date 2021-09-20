import React from 'react'
import { styled ,makeStyles} from '@mui/material/styles';
import {Container} from "@mui/material"
import {Home,Typography} from '@mui/icons-material/';
const useStyle = makeStyles((theme)=>({
    
}))
const Leftbar = () => {
    return (
        <Container>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography>Home</Typography>
             </div>
             <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Home</Typography>
             </div>
             <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography>Home</Typography>
             </div>
        </Container>
    )
}

export default Leftbar
