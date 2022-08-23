import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Grid container>
      <Grid item sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ background: '#066163' }}>
          <Toolbar sx={{ display: 'flex' }}>
            <Grid item xs={6}>
              <Typography variant="h6" color="inherit" component="div">
                <Avatar
                  style={{
                    color: '#066163',
                    backgroundColor: '#CDBE78',
                    borderRadius: '0',
                    border: '4px solid #fafafa',
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent'
                  }}>
                  <b> TK</b>
                </Avatar>
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Grid sx={{ padding: '0.5rem' }} className="hideHeaderTextabout">
                <Typography variant="h6" component="div">
                  <Link to="/" style={{ color: 'white', textDecorationLine: 'none' }}>
                    About
                  </Link>
                </Typography>
              </Grid>
              <Grid item sx={{ padding: '0.5rem' }} className="hideHeaderTextProjects">
                <Typography variant="h6" component="div">
                  <Link to="/" style={{ color: 'white', textDecorationLine: 'none' }}>
                    Projects
                  </Link>
                </Typography>
              </Grid>
              <Grid item sx={{ padding: '0.5rem' }} className="hideHeaderTextresume">
                <Typography variant="h6" component="div">
                  <Link to="/" style={{ color: 'white', textDecorationLine: 'none' }}>
                    Resume
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ padding: '0.5rem' }} className="hideHeadericon">
              <IconButton>
                <MenuIcon sx={{ color: '#fafafa' }} onClick={() => setOpen(true)} />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <SwipeableDrawer
        open={open}
        anchor="right"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}>
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />

        <ListItem sx={{ paddingLeft: '0.8rem' }}>
          <List>
            <Link to="/" style={{ color: '#383838', textDecorationLine: 'none' }}>
              <b> About</b>
            </Link>
          </List>
          <List>
            <Link to="/" style={{ color: '#383838', textDecorationLine: 'none' }}>
              <b> Projects</b>
            </Link>
          </List>
          <List>
            <Link to="/" style={{ color: '#383838', textDecorationLine: 'none' }}>
              <b>Resume</b>
            </Link>
          </List>
        </ListItem>
      </SwipeableDrawer>
    </Grid>
  );
}
export default Header;
