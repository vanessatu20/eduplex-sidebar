import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NewsfeedIcon from './newsfeed.svg';
import MyCoursesIcon from './myCourses.svg';

const drawerWidth = 236;

const useStyles = makeStyles((theme) => ({
  
  drawerPaper: {
    width: drawerWidth,
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  button: {
    '&.active, &:hover, &.active:hover': {
      backgroundColor: '#e5e5e5',
      borderRadius: '0px 25px 25px 0px',
    },
  },

  icon: {
    paddingRight: theme.spacing(5),
  },

}));

function SideBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
      <ListItem button className={classes.button}>
        <Icon className={classes.icon}>
          <img src={NewsfeedIcon} alt="" height="100%"/>
        </Icon>
        <ListItemText primary="Newsfeed" />
      </ListItem>
      <ListItem button className={classes.button}>
        <Icon className={classes.icon}>
          <img src={MyCoursesIcon} alt="" height="100%"/>
        </Icon>
        <ListItemText primary="My Courses" />
      </ListItem>
      <List disablePadding>
        <ListItem button className={`${classes.nested} ${classes.button}`}>
          <ListItemText primary="Course 1" />
        </ListItem>
        <ListItem button className={`${classes.nested} ${classes.button}`}>
          <ListItemText primary="Course 2" />
        </ListItem>
      </List>
      
    </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}



export default SideBar;
