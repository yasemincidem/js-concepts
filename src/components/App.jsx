import React from 'react';
import {AppBar, Toolbar, Typography, Drawer} from '@material-ui/core';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/panda-syntax.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const imports = require('./imports');

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    overflowX: 'hidden',
  },
  codeExampleGroup: {
    height: 250,
    display: 'flex'
  },
  codeExampleContainer: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    margin: 20
  },
  arrowIcon: {
    margin: '90px 10px 10px 10px'
  }
}));

const App = () => {
  const classes = useStyles();
  const [contentKey, setContentKey] = React.useState('');
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Js Concepts Examples
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left">
        <div className={classes.toolbar}/>
        <Divider/>
        <List>
          {[{key: 'CALL_STACK', text: 'Call Stack'}, {
            key: 'PRIM_REF_TYPES',
            text: 'Primitive and Reference Types'
          }, {
            key: 'TYPE_COERCIONS',
            text: 'Type Coercion'
          }, {
            key: 'DOUBLE_VS_TRIPLE_EQUALS',
            text: 'Double vs Triple Equals'
          }, {
            key: 'FUNCTION_AND_BLOCK_SCOPES',
            text: 'Function vs Block Scopes'
          }, {
            key: 'IIFE_AND_MODULES',
            text: 'IIFE and modules'
          }].map((item) => (
            <ListItem button key={item.text} onClick={() => setContentKey(item.key)}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {contentKey ? imports.JS_CONCEPTS[contentKey].map((content) => (
          <div className={classes.codeExampleGroup}>
            <div className={classes.codeExampleContainer}>
              <CodeMirror
                value={content.code}
                height={'100%'}
                width={300}
                options={{
                  theme: 'monokai',
                  keyMap: 'sublime',
                  mode: 'jsx',
                }}
              />
              <ArrowForwardIcon className={classes.arrowIcon}/>
              <CodeMirror
                value={content.explanation}
                height={'100%'}
                width={1000}
                options={{
                  theme: 'panda-syntax',
                  keyMap: 'sublime',
                  mode: 'markdown',
                }}
              />
            </div>
          </div>
        )) : null}
      </main>
    </div>
  )
};
export default App;
