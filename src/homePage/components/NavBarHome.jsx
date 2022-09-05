import { AppBar, Divider, Typography } from "@mui/material"

export const NavBarHome = () => {
  return (
    <AppBar
      color='inherit'
      sx={{
       height: '60px',
       boxShadow: 'none',
       mb: '10%',


      }}
    >
        <Typography
         sx={{
          
          pl: '5%',
          pt: '1%',
          fontSize: '35px',
          color: '#1339ab'
        }}
        >
          Midu <span style={{ color: 'grey', fontSize: '25px'}}>Chat</span> </Typography>
          <Divider   />
    </AppBar>
  )
}
