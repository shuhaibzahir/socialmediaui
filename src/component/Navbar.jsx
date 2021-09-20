import React,{useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, InputBase, Toolbar, Typography, Badge ,Avatar} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Search as SearchIcon ,Mail } from "@mui/icons-material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyle = makeStyles((theme) => ({
  logo: {
    color: "white",
    cursor: "pointer",
  },
  bigLogo: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  smallLogo: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcons: {
    display: (props)=>(props.open?"none":"flex"),
    alignItems:"center",
     transition:"1s",
     justifyContent:"space-around",
    

  },
  mainSearchbar:{
        
        display:(props)=>(props.open?"flex":"none"),
        justifyContent:"space-between",
         alignItems:"center",

     
  },
  icons:{
    marginLeft: theme.spacing(1),
    cursor:"pointer",
   },
   profilePicture:{
       marginRight:theme.spacing(2),
       marginLeft: theme.spacing(2),
   },
  
   searchIconMobile:{
    marginRight:theme.spacing(2),
     display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
   },
   closingIcon:{
     cursor:"pointer",
       marginRight:theme.spacing(1)
   }
   
}));

const Search = styled("div")(({ theme }) => ({
    
  position: "relative",
  marginLeft: theme.spacing(2),
  justifyContent:"space-between",
  alignItems:"center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
 
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    display:"flex",
    width: "auto",
  },
}));




const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));



const Navbar = () => {
    const [open,setOpen]=useState(false)
    const classes = useStyle({open});
  return (
    <AppBar style={{ backgroundColor: "#345B63"  }}>
      <Toolbar className={classes.mainDiv}>
        <Typography
          variant="h5"
          className={`${classes.bigLogo} ${classes.logo}`}
          fontFamily="Dancing Script"
        >
          Skyline
        </Typography>

        <Typography
          variant="h6"
          className={`${classes.smallLogo} ${classes.logo}`}
          fontFamily="Dancing Script"
        >
          Skyline
        </Typography>
        
   
        <Search className={classes.mainSearchbar}  >
         <SearchIconWrapper>
           <SearchIcon color="secondary" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search", style:{color:"white"} }}
            
          />
          
          {open&&<HighlightOffIcon color="secondary"  className={classes.closingIcon} onClick={()=>{setOpen(false)}}/>}
        </Search>
     

        <div className={classes.menuIcons}>
            <div className={classes.searchIconMobile}>
            <SearchIcon onClick={()=>{setOpen(true)}} style={{cursor:"pointer"}} color="secondary" />
            </div>
          <Badge badgeContent={4} className={classes.icons} color="secondary" >
            <Mail style={{color:"#EDEDED"}} />
          </Badge>
         
          <Badge badgeContent={4} className={classes.icons} color="secondary"  >
            <Mail style={{color:"#EDEDED"}}  />
          </Badge>
          <Avatar className={classes.profilePicture}  >N</Avatar>
        </div> 
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
