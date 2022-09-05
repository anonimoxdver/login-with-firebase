import {
  Box,
  Paper,
  InputBase,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {  Search } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, ml: 3 }}
    >
      <Typography variant="h5" noWrap component="div" sx={{ p: 2}}>
        Chat
      </Typography>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          backgroundColor: "grey",
          boxShadow: "none",
        }}
      >
        <Search sx={{ p: "1px", opacity: "0.5" }} aria-label="search" />

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <List sx={{ overflowY: 'scroll', maxHeight: '80vh'}}>
        {["Juan", "David", "Fernando", "Miguel"].map((text) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <img
                    style={{
                        width: '40px'
                    }} 
                    src='https://res.cloudinary.com/dsii7wbi4/image/upload/v1656971679/chat-twilio/149071_sf8jro.png'
                />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={text} sx={{ fontWeight: '700'}} />
                <ListItemText
                  secondary={"Exercitation cillum irure elit consectetur."}
                />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
