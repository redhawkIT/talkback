import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FullscreenButton from './FullscreenButton';
import ThemeButton from './ThemeButton';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TalkButton from './TalkButton';
import TextButton from './TextButton';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    // left: 0,
    // right: 0,
    right: 30,
    margin: '0 auto'
  },
  leftButtons: {
    marginLeft: 'auto'
  }
}));

function ActionsBar () {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      color="primary"
      title='Talkback'
    >
      <Toolbar>
        <FullscreenButton
          edge='start'
          color='inherit'
          title='Fullscreen'
          aria-label='fullscreen'
        />
        <ThemeButton
          edge='start'
          color='inherit'
          title='Invert Colors'
          aria-label='invert colors'
        />

        <div className={classes.grow} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      <ButtonGroup>
        <TalkButton
          // className={classes.fabButton}
          color='secondary'
          title='Talk'
          aria-label='speech to text'
          // style={{ right: 124 }}
        />
        <TextButton
          // className={classes.fabButton}
          color='secondary'
          title='text'
          aria-label='text'
        />
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default ActionsBar