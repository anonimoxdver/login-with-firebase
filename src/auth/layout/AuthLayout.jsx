import { Grid, Typography } from '@mui/material';
import { SliderImages } from './SliderImages';


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'white' }}
    >
      <Grid
        xs={0} sm={6} md={6} lg={6} xl={6}
        display={{ xs: "none", sm: "block" }}
          sx={{ 
            width: 1/2,
            height: 1,
            backgroundColor: 'primary.main',
            margin: 0,
            padding: 0,
            minHeight: '100vh'
          }}
      >
        <SliderImages/>

      </Grid>

      <Grid item
       
       sx={{ 
          width: 1/2,
          backgroundColor: 'white', 
          padding: 0, 
          borderRadius: 2,

        }}>
          
          <Typography variant='h5' sx={{ mb: 1, ml: '21%' }}>{ title }</Typography>

            
            { children }

        </Grid>

    </Grid>

  )
}
