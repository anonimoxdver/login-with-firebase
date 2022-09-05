import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';


import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google, GitHub } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGithubSignIn, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  const onGithubSingIn = () => {
    dispatch( startGithubSignIn() )
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item   xs={11} sm={7} md={7} lg={7} xl={7} sx={{ mt: 2, ml: 'auto', mr: 'auto'}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={11} sm={7} md={7} lg={7} xl={7} sx={{ mt: 2, ml: 'auto', mr: 'auto'}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>


            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              direction="row"
              justifyContent="center"
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={11} sm={7} md={7} lg={7} xl={7}
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>
            
            <Grid container spacing={ 2 }  >
              <Grid item xs={11} sm={7} md={7} lg={7} xl={7} sx={{  mt: 1, ml: 'auto', mr: 'auto'}}>
                <Button
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={11} sm={7} md={7} lg={7} xl={7} sx={{  mt: 0, ml: 'auto', mr: 'auto'}}>
                <Button
                   disabled={ isAuthenticating }
                   variant='outlined' 
                   fullWidth
                   onClick={ onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
              <Grid item xs={11} sm={7} md={7} lg={7} xl={7} sx={{ mt: 0, ml: 'auto', mr: 'auto'}}>
                <Button
                   disabled={ isAuthenticating }
                   variant='outlined' 
                   fullWidth
                   onClick={ onGithubSingIn }>
                  <GitHub />
                  <Typography sx={{ ml: 1 }}>Github</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction="row" justifyContent="flex-end" sx={{ mr: '21%'}}>
              ¿No tienes una cuenta? 
              <Link component={ RouterLink } color='inherit' to="/auth/register" sx={{ ml: '1.5%'}}>
                  Crea una
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
