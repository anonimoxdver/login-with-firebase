import { Grid, Box, Typography, Button } from "@mui/material"
import { NavBarHome } from "./components/NavBarHome"
import { Link } from 'react-router-dom'


export const HomePage = () => {
  return (
    <Box 
    fullWidth 
    >
      <NavBarHome/>
      
      <Grid 
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 10}}

      >
        <Grid
          xs={12} sm={12} md={6} lg={6} xl={6}
        >
          <Typography sx={{maxWidth: '500px', overflow: 'hidden', ml: '10%', fontSize: '36px', mb: '3%', fontWeight: '900', lineHeight: '1.2', color: 'black'}}>
          Chatea con tus amigos conoce nuevas personas y crea salas en grupo.
          </Typography>

          <Typography sx={{maxWidth: '500px', overflow: 'hidden', ml: '10%', mb: '4%', opacity: '0.8 '}}>
          Chat en tiempo real, llamadas, grupos y notificaciones, todo esto gracias a Twilio y a midudev síguelo en <a href="https://www.twitch.tv/midudev" style={{color: '#1339ab'}}>Twitch</a>.
          </Typography>

          <Grid direction="row" >
            <Button 
              component={ Link } to="/auth/login"
              variant="outlined"
              sx={{ ml: '25%'}}  
            >Iniciar sesión</Button>
            <Button 
              component={ Link } to="/auth/register"
              variant="contained"
              sx={{ ml: '1%'}} 
            >Registrate
            </Button>
          </Grid>
         
        </Grid>
          <Grid
            xs={12} sm={12} md={6} lg={6} xl={6}
          >
            <img  
              style={{
                width: '90%',
                paddingTop: '6%'
              }}
              src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1656860394/chat-twilio/Chat_Monochromatic_1_i0dgtk.svg"
              alt=""
          />
        </Grid>
      </Grid>
        
    </Box>
  )
}
