import { Toolbar, Divider } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';


const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        <NavBar  />
        

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 1 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
