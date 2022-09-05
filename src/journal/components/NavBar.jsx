import { useDispatch } from 'react-redux';
import { AppBar,  Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';


export const NavBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }


  return (
    <AppBar 
        position='fixed'
        color='inherit'
        sx={{ 
            width: { sm: 1/30 },
            
         }}
    >
                <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
                
    </AppBar>
  )
}
