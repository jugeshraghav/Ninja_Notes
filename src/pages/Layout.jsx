import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const classes = {
  page: {
    background: "#f9f9f9",
    paddingTop: "50px",
    height: "100%",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: "20px",
  },
  appBar: {
    height: 50,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  date: {
    flexGrow: 1,
  },
  toolbar: "",
  avatar: {
    marginLeft: "20px",
  },
};

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div>
      {/* app bar */}
      <AppBar
        position="fixed"
        sx={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar variant="h6" sx={{ paddingTop: "15px" }}>
          Welcome to Ninja Notes
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "secondary",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item?.path)}
              sx={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <Box sx={classes.page}>
        {/* <div sx={classes.toolbar}></div> */}
        {children}
      </Box>
    </div>
  );
}
