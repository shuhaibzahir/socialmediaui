import React from "react";
import { Grid } from '@mui/material';
 import Navbar  from "./component/Navbar";
 import Leftbar from "./component/Leftbar";
const App = () => {
 
  return (
    <div>  
     <Navbar />
     <Grid container spacing={3}>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
     </Grid>
    </div>
  );
};

export default App;
