import { useState,  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Divider, Grid, Typography, IconButton, TextField } from '@mui/material'
import { GifBox, InsertEmoticon, InsertPhoto} from '@mui/icons-material'



export const ChatView = () => {





  return (
    <Box
        sx={{
            width: 1,
            minHeight: '87vh',
        }}
    >
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <img 
            style={{
                width: '40px'
            }}
            src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1656971679/chat-twilio/149071_sf8jro.png"
            alt=""
            />
            <Typography
                sx={{
                    ml: 1,
                    mb: 2,
                    fontWeight: '700'
                }}
            >David Duarte
            </Typography> 
            <Typography
                sx={{
                    position: 'absolute',
                    ml: 6,
                    mt: 3,
                    fontSize: 15,
                    color: 'green'
                }}
            >online
            </Typography> 
        </Grid>
        <Divider sx={ {mt: 1, width: '91%'}}  />
        <Grid 
            sx={{
            minWidth: '40%',
            minHeight: '70vh',
            margin: 0
        }}>
                sadsadasdasdsadsadsadsadsadsadsadasdsadsadasdsdsasadsadsadadssada
                
        </Grid>
        <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            < GifBox   />
            </IconButton>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <InsertEmoticon />
            </IconButton>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <InsertPhoto />
            </IconButton>
        <form >
            <TextField 
                label="Message" 
                type="text" 
                placeholder='Message' 
                name="Message"
     
                sx={{
                    width: '70%'
                }}
              />
        </form>

        </Grid>



    </Box>
  )
}
